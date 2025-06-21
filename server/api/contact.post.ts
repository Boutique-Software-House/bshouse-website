import { defineEventHandler, readBody, createError } from 'h3'
import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  company: string
  phone: string
  projectType: string
  budget: string
  message: string
  newsletter: boolean
}

interface EmailData {
  to: string
  from: string
  subject: string
  html: string
  text: string
}

// Configuración del servicio de email
const EMAIL_CONFIG = {
  smtp: {
    host: process.env.SMTP_HOST || 'smtp-relay.brevo.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    ignoreTLS: false,
    auth: {
      user: process.env.SMTP_USER || 'seba@bshouse.io',
      pass: process.env.SMTP_PASS || 'BvDy3H5Ja2fS4hNG'
    }
  },
  crm: {
    endpoint: process.env.CRM_ENDPOINT || '',
    apiKey: process.env.CRM_API_KEY || ''
  },
  notifications: {
    to: process.env.NOTIFICATION_EMAIL || 'info@bshouse.io',
    from: process.env.FROM_EMAIL || 'noreply@bshouse.io'
  }
}

// Validar datos del formulario
function validateFormData(data: any): ContactFormData {
  console.log('Validando datos recibidos:', data)
  
  const errors: string[] = []
  
  if (!data.name?.trim()) errors.push('El nombre es obligatorio')
  if (!data.email?.trim()) errors.push('El email es obligatorio')
  if (!data.company?.trim()) errors.push('La empresa es obligatoria')
  if (!data.phone?.trim()) errors.push('El teléfono es obligatorio')
  if (!data.projectType) errors.push('El tipo de proyecto es obligatorio')
  if (!data.message?.trim()) errors.push('El mensaje es obligatorio')
  
  // Validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (data.email && !emailRegex.test(data.email)) {
    errors.push('El email no es válido')
  }
  
  if (errors.length > 0) {
    console.log('Errores de validación:', errors)
    throw createError({
      statusCode: 400,
      statusMessage: 'Datos inválidos',
      data: { errors }
    })
  }
  
  return {
    name: data.name.trim(),
    email: data.email.trim(),
    company: data.company.trim(),
    phone: data.phone.trim(),
    projectType: data.projectType,
    budget: data.budget || 'No especificado',
    message: data.message.trim(),
    newsletter: Boolean(data.newsletter)
  }
}

// Traducir valores de los selects
function translateFormValues(formData: ContactFormData, language: string = 'es'): ContactFormData {
  const projectTypeTranslations: { [key: string]: { es: string, en: string } } = {
    'web-development': { es: 'Desarrollo Web', en: 'Web Development' },
    'mobile-development': { es: 'Desarrollo Móvil', en: 'Mobile Development' },
    'consulting': { es: 'Consultoría', en: 'Consulting' },
    'other': { es: 'Otro', en: 'Other' }
  }
  
  const budgetTranslations: { [key: string]: { es: string, en: string } } = {
    'small': { es: 'Menos de $10,000', en: 'Less than $10,000' },
    'medium': { es: '$10,000 - $50,000', en: '$10,000 - $50,000' },
    'large': { es: '$50,000 - $200,000', en: '$50,000 - $200,000' },
    'enterprise': { es: 'Más de $200,000', en: 'More than $200,000' },
    'discuss': { es: 'Discutir presupuesto', en: 'Discuss budget' }
  }
  
  const lang = language === 'en' ? 'en' : 'es'
  
  return {
    ...formData,
    projectType: projectTypeTranslations[formData.projectType]?.[lang] || formData.projectType,
    budget: budgetTranslations[formData.budget]?.[lang] || formData.budget
  }
}

// Generar contenido del email
function generateEmailContent(formData: ContactFormData, language: string = 'es'): EmailData {
  const translatedData = translateFormValues(formData, language)
  const isEnglish = language === 'en'
  
  const subject = isEnglish 
    ? `New contact from BSHouse - ${translatedData.projectType}`
    : `Nuevo contacto desde BSHouse - ${translatedData.projectType}`
  
  const headerTitle = isEnglish ? 'New Contact - BSHouse' : 'Nuevo Contacto - BSHouse'
  const headerSubtitle = isEnglish ? 'Contact form received' : 'Formulario de contacto recibido'
  
  const fieldLabels = {
    name: isEnglish ? 'Name' : 'Nombre',
    email: 'Email',
    company: isEnglish ? 'Company' : 'Empresa',
    phone: isEnglish ? 'Phone' : 'Teléfono',
    projectType: isEnglish ? 'Project Type' : 'Tipo de Proyecto',
    budget: isEnglish ? 'Estimated Budget' : 'Presupuesto Estimado',
    message: isEnglish ? 'Project Description' : 'Descripción del Proyecto',
    newsletter: 'Newsletter'
  }
  
  const newsletterValue = isEnglish 
    ? (translatedData.newsletter ? 'Yes - Wants to receive information' : 'No')
    : (translatedData.newsletter ? 'Sí - Quiere recibir información' : 'No')
  
  const footerText = {
    tagline: isEnglish ? 'Boutique Software House' : 'Boutique Software House',
    subtitle: isEnglish ? 'Transforming ideas into digital experiences' : 'Transformando ideas en experiencias digitales',
    sentFrom: isEnglish ? 'Sent from BSHouse contact form' : 'Enviado desde el formulario de contacto de BSHouse'
  }
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${headerTitle}</title>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #000000;
          background-color: #f8f8f8;
          font-weight: 400;
        }
        
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .header {
          background: #ffffff;
          color: #000000;
          padding: 30px;
          text-align: center;
          border-bottom: 1px solid #e0e0e0;
        }
        
        .logo-section {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 20px;
        }
        
        .logo-icon {
          font-size: 24px;
          color: #000000;
        }
        
        .logo-text {
          font-size: 18px;
          font-weight: 700;
          color: #000000;
          letter-spacing: -0.025em;
        }
        
        .header h1 {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 8px;
          color: #000000;
          letter-spacing: -0.025em;
        }
        
        .header p {
          font-size: 14px;
          color: #666666;
          font-weight: 400;
        }
        
        .content {
          padding: 30px;
          background-color: #ffffff;
        }
        
        .info-card {
          background: #ffffff;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          padding: 20px;
          margin-bottom: 16px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .info-card:hover {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transform: translateY(-1px);
        }
        
        .field-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }
        
        .field-icon {
          width: 20px;
          height: 20px;
          background: #000000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .field-icon i {
          font-size: 10px;
          color: #ffffff;
        }
        
        .label {
          font-weight: 600;
          color: #000000;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .value {
          color: #333333;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.5;
          padding-left: 28px;
        }
        
        .message-field {
          background-color: #f8f8f8;
          border-left: 4px solid #000000;
        }
        
        .message-field .value {
          white-space: pre-wrap;
          color: #333333;
          font-style: italic;
        }
        
        .newsletter-field {
          background-color: #f0f0f0;
          border-left: 4px solid #666666;
        }
        
        .newsletter-field .value {
          color: #666666;
          font-weight: 500;
        }
        
        .footer {
          background-color: #f8f8f8;
          padding: 30px;
          text-align: center;
          border-top: 1px solid #e0e0e0;
        }
        
        .footer-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 16px;
        }
        
        .footer-logo-icon {
          font-size: 20px;
          color: #000000;
        }
        
        .footer-logo-text {
          font-size: 16px;
          font-weight: 700;
          color: #000000;
        }
        
        .footer p {
          color: #666666;
          font-size: 14px;
          margin-bottom: 8px;
          font-weight: 400;
        }
        
        .timestamp {
          font-size: 12px;
          color: #999999;
          font-weight: 300;
          margin-top: 16px;
        }
        
        .contact-info {
          background: #ffffff;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          padding: 20px;
          margin-top: 20px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .contact-info h3 {
          font-size: 16px;
          font-weight: 600;
          color: #000000;
          margin-bottom: 12px;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          font-size: 14px;
          color: #666666;
        }
        
        .contact-item i {
          color: #000000;
          font-size: 12px;
          width: 16px;
        }
        
        @media (max-width: 600px) {
          .container {
            margin: 10px;
            border-radius: 4px;
          }
          
          .header, .content, .footer {
            padding: 20px;
          }
          
          .info-card {
            padding: 16px;
            margin-bottom: 12px;
          }
          
          .logo-text, .footer-logo-text {
            font-size: 14px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo-section">
            <div class="logo-icon">
              <i class="las la-code-branch"></i>
            </div>
            <div class="logo-text">BSHouse</div>
          </div>
          <h1>${headerTitle}</h1>
          <p>${headerSubtitle}</p>
        </div>
        
        <div class="content">
          <div class="info-card">
            <div class="field-header">
              <div class="field-icon">
                <i class="las la-user"></i>
              </div>
              <span class="label">${fieldLabels.name}</span>
            </div>
            <div class="value">${translatedData.name}</div>
          </div>
          
          <div class="info-card">
            <div class="field-header">
              <div class="field-icon">
                <i class="las la-envelope"></i>
              </div>
              <span class="label">${fieldLabels.email}</span>
            </div>
            <div class="value">${translatedData.email}</div>
          </div>
          
          <div class="info-card">
            <div class="field-header">
              <div class="field-icon">
                <i class="las la-building"></i>
              </div>
              <span class="label">${fieldLabels.company}</span>
            </div>
            <div class="value">${translatedData.company}</div>
          </div>
          
          <div class="info-card">
            <div class="field-header">
              <div class="field-icon">
                <i class="las la-phone"></i>
              </div>
              <span class="label">${fieldLabels.phone}</span>
            </div>
            <div class="value">${translatedData.phone}</div>
          </div>
          
          <div class="info-card">
            <div class="field-header">
              <div class="field-icon">
                <i class="las la-project-diagram"></i>
              </div>
              <span class="label">${fieldLabels.projectType}</span>
            </div>
            <div class="value">${translatedData.projectType}</div>
          </div>
          
          <div class="info-card">
            <div class="field-header">
              <div class="field-icon">
                <i class="las la-dollar-sign"></i>
              </div>
              <span class="label">${fieldLabels.budget}</span>
            </div>
            <div class="value">${translatedData.budget}</div>
          </div>
          
          <div class="info-card message-field">
            <div class="field-header">
              <div class="field-icon">
                <i class="las la-comment"></i>
              </div>
              <span class="label">${fieldLabels.message}</span>
            </div>
            <div class="value">${translatedData.message.replace(/\n/g, '<br>')}</div>
          </div>
          
          <div class="info-card newsletter-field">
            <div class="field-header">
              <div class="field-icon">
                <i class="las la-bell"></i>
              </div>
              <span class="label">${fieldLabels.newsletter}</span>
            </div>
            <div class="value">${newsletterValue}</div>
          </div>
          
          <div class="contact-info">
            <h3>${isEnglish ? 'Contact Information' : 'Información de Contacto'}</h3>
            <div class="contact-item">
              <i class="las la-envelope"></i>
              <span>info@bshouse.io</span>
            </div>
            <div class="contact-item">
              <i class="las la-phone"></i>
              <span>Argentina: +54 11 3656-3300 | USA: +1 786 819-5867</span>
            </div>
            <div class="contact-item">
              <i class="las la-map-marker"></i>
              <span>${isEnglish ? 'Argentina & USA Offices' : 'Oficinas en Argentina y Estados Unidos'}</span>
            </div>
          </div>
        </div>
        
        <div class="footer">
          <div class="footer-logo">
            <div class="footer-logo-icon">
              <i class="las la-code-branch"></i>
            </div>
            <div class="footer-logo-text">BSHouse</div>
          </div>
          <p>${footerText.tagline}</p>
          <p>${footerText.subtitle}</p>
          <div class="timestamp">
            ${isEnglish ? 'Sent on' : 'Enviado el'} ${new Date().toLocaleString(isEnglish ? 'en-US' : 'es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>
        </div>
      </div>
    </body>
    </html>
  `
  
  const text = isEnglish ? `
NEW CONTACT - BSHOUSE
=====================

CONTACT INFORMATION:
Name: ${translatedData.name}
Email: ${translatedData.email}
Company: ${translatedData.company}
Phone: ${translatedData.phone}

PROJECT DETAILS:
Project Type: ${translatedData.projectType}
Estimated Budget: ${translatedData.budget}

DESCRIPTION:
${translatedData.message}

NEWSLETTER: ${newsletterValue}

CONTACT INFO:
Email: info@bshouse.io
Phone: Argentina: +54 11 3656-3300 | USA: +1 786 819-5867
Offices: Argentina & USA Offices

---
Sent from BSHouse contact form
Date: ${new Date().toLocaleString('en-US')}
  ` : `
NUEVO CONTACTO - BSHOUSE
========================

INFORMACIÓN DEL CONTACTO:
Nombre: ${translatedData.name}
Email: ${translatedData.email}
Empresa: ${translatedData.company}
Teléfono: ${translatedData.phone}

DETALLES DEL PROYECTO:
Tipo de Proyecto: ${translatedData.projectType}
Presupuesto Estimado: ${translatedData.budget}

DESCRIPCIÓN:
${translatedData.message}

NEWSLETTER: ${newsletterValue}

INFORMACIÓN DE CONTACTO:
Email: info@bshouse.io
Teléfono: Argentina: +54 11 3656-3300 | USA: +1 786 819-5867
Oficinas: Oficinas en Argentina y Estados Unidos

---
Enviado desde el formulario de contacto de BSHouse
Fecha: ${new Date().toLocaleString('es-ES')}
  `
  
  return {
    to: EMAIL_CONFIG.notifications.to,
    from: EMAIL_CONFIG.notifications.from,
    subject,
    html,
    text
  }
}

// Enviar email usando SMTP con nodemailer
async function sendEmailSMTP(emailData: EmailData) {
  try {
    console.log('Configurando transporter SMTP...')
    
    // Crear transporter
    const transporter = nodemailer.createTransport({
      host: EMAIL_CONFIG.smtp.host,
      port: EMAIL_CONFIG.smtp.port,
      secure: EMAIL_CONFIG.smtp.port === 465,
      auth: EMAIL_CONFIG.smtp.auth,
      tls: {
        rejectUnauthorized: false
      }
    })
    
    // Verificar conexión
    await transporter.verify()
    console.log('Conexión SMTP verificada correctamente')
    
    // Enviar email
    const info = await transporter.sendMail({
      from: emailData.from,
      to: emailData.to,
      subject: emailData.subject,
      text: emailData.text,
      html: emailData.html
    })
    
    console.log('Email enviado correctamente:', info.messageId)
    return { success: true, method: 'SMTP', messageId: info.messageId }
    
  } catch (error) {
    console.error('Error enviando email via SMTP:', error)
    throw error
  }
}

// Enviar a CRM
async function sendToCRM(formData: ContactFormData) {
  try {
    if (!EMAIL_CONFIG.crm.endpoint || !EMAIL_CONFIG.crm.apiKey) {
      console.log('CRM no configurado, saltando...')
      return { success: true, method: 'CRM_SKIPPED' }
    }
    
    const crmData = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      project_type: formData.projectType,
      budget: formData.budget,
      message: formData.message,
      newsletter: formData.newsletter,
      source: 'BSHouse Website',
      created_at: new Date().toISOString()
    }
    
    const response = await fetch(EMAIL_CONFIG.crm.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${EMAIL_CONFIG.crm.apiKey}`
      },
      body: JSON.stringify(crmData)
    })
    
    if (!response.ok) {
      throw new Error(`CRM API error: ${response.status}`)
    }
    
    return { success: true, method: 'CRM' }
  } catch (error) {
    console.error('Error enviando a CRM:', error)
    throw error
  }
}

// Endpoint principal
export default defineEventHandler(async (event) => {
  try {
    console.log('Endpoint de contacto llamado')
    
    // Leer datos del body
    const body = await readBody(event)
    console.log('Datos recibidos en el body:', body)
    
    // Detectar idioma del usuario (por defecto español)
    const userLanguage = body.language || 'es'
    console.log('Idioma detectado:', userLanguage)
    
    // Validar datos
    const formData = validateFormData(body)
    console.log('Datos validados:', formData)
    
    // Generar contenido del email en el idioma correcto
    const emailData = generateEmailContent(formData, userLanguage)
    console.log('Email generado para:', emailData.to)
    
    // Enviar email y a CRM en paralelo
    const [emailResult, crmResult] = await Promise.allSettled([
      sendEmailSMTP(emailData),
      sendToCRM(formData)
    ])
    
    // Verificar resultados
    const results = {
      email: emailResult.status === 'fulfilled' ? emailResult.value : null,
      crm: crmResult.status === 'fulfilled' ? crmResult.value : null,
      errors: [] as string[]
    }
    
    if (emailResult.status === 'rejected') {
      console.error('Error en email:', emailResult.reason)
      results.errors.push('Error enviando email')
    }
    
    if (crmResult.status === 'rejected') {
      console.error('Error en CRM:', crmResult.reason)
      results.errors.push('Error enviando a CRM')
    }
    
    // Si al menos uno funcionó, consideramos éxito
    const success = results.email || results.crm
    
    if (!success) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Error en el procesamiento',
        data: { errors: results.errors }
      })
    }
    
    console.log('Procesamiento exitoso:', results)
    
    return {
      success: true,
      message: userLanguage === 'en' ? 'Form sent successfully' : 'Formulario enviado correctamente',
      data: results
    }
    
  } catch (error: any) {
    console.error('Error en endpoint de contacto:', error)
    
    if (error.statusCode) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Error interno del servidor',
      data: { error: error.message }
    })
  }
}) 