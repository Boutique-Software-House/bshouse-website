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

// Generar contenido del email
function generateEmailContent(formData: ContactFormData): EmailData {
  const subject = `Nuevo contacto desde BSHouse - ${formData.projectType}`
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #2563eb; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9fafb; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #374151; }
        .value { color: #6b7280; }
        .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Nuevo Contacto - BSHouse</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Nombre:</div>
            <div class="value">${formData.name}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${formData.email}</div>
          </div>
          <div class="field">
            <div class="label">Empresa:</div>
            <div class="value">${formData.company}</div>
          </div>
          <div class="field">
            <div class="label">Teléfono:</div>
            <div class="value">${formData.phone}</div>
          </div>
          <div class="field">
            <div class="label">Tipo de Proyecto:</div>
            <div class="value">${formData.projectType}</div>
          </div>
          <div class="field">
            <div class="label">Presupuesto:</div>
            <div class="value">${formData.budget}</div>
          </div>
          <div class="field">
            <div class="label">Mensaje:</div>
            <div class="value">${formData.message.replace(/\n/g, '<br>')}</div>
          </div>
          <div class="field">
            <div class="label">Newsletter:</div>
            <div class="value">${formData.newsletter ? 'Sí' : 'No'}</div>
          </div>
        </div>
        <div class="footer">
          <p>Enviado desde el formulario de contacto de BSHouse</p>
          <p>Fecha: ${new Date().toLocaleString('es-ES')}</p>
        </div>
      </div>
    </body>
    </html>
  `
  
  const text = `
Nuevo Contacto - BSHouse

Nombre: ${formData.name}
Email: ${formData.email}
Empresa: ${formData.company}
Teléfono: ${formData.phone}
Tipo de Proyecto: ${formData.projectType}
Presupuesto: ${formData.budget}
Mensaje: ${formData.message}
Newsletter: ${formData.newsletter ? 'Sí' : 'No'}

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
    
    // Validar datos
    const formData = validateFormData(body)
    console.log('Datos validados:', formData)
    
    // Generar contenido del email
    const emailData = generateEmailContent(formData)
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
      message: 'Formulario enviado correctamente',
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