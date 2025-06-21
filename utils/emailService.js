// Servicio de email para el formulario de contacto
// En producción, puedes usar servicios como EmailJS, Formspree, o tu propio backend

export class EmailService {
  constructor() {
    // Configuración del servicio de email
    this.config = {
      serviceId: process.env.NUXT_EMAILJS_SERVICE_ID || 'your_service_id',
      templateId: process.env.NUXT_EMAILJS_TEMPLATE_ID || 'your_template_id',
      userId: process.env.NUXT_EMAILJS_USER_ID || 'your_user_id',
      toEmail: 'info@bshouse.io'
    }
  }

  // Validar datos del formulario
  validateFormData(formData) {
    const errors = {}
    
    if (!formData.name?.trim()) {
      errors.name = 'El nombre es obligatorio'
    }
    
    if (!formData.email?.trim()) {
      errors.email = 'El email es obligatorio'
    } else if (!this.isValidEmail(formData.email)) {
      errors.email = 'El email no es válido'
    }
    
    if (!formData.company?.trim()) {
      errors.company = 'La empresa es obligatoria'
    }
    
    if (!formData.phone?.trim()) {
      errors.phone = 'El teléfono es obligatorio'
    } else if (!this.isValidPhone(formData.phone)) {
      errors.phone = 'El teléfono no es válido'
    }
    
    if (!formData.projectType) {
      errors.projectType = 'El tipo de proyecto es obligatorio'
    }
    
    if (!formData.message?.trim()) {
      errors.message = 'El mensaje es obligatorio'
    }
    
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    }
  }

  // Validar email
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Validar teléfono
  isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))
  }

  // Preparar datos para el envío
  prepareEmailData(formData) {
    return {
      to_email: this.config.toEmail,
      from_name: formData.name.trim(),
      from_email: formData.email.trim(),
      company: formData.company.trim(),
      phone: formData.phone.trim(),
      project_type: formData.projectType,
      budget: formData.budget || 'No especificado',
      message: formData.message.trim(),
      newsletter: formData.newsletter ? 'Sí' : 'No',
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      language: navigator.language,
      ip_address: 'Capturado por el servidor'
    }
  }

  // Enviar email usando EmailJS
  async sendEmailWithEmailJS(emailData) {
    try {
      // Verificar que EmailJS esté disponible
      if (typeof window !== 'undefined' && window.emailjs) {
        const response = await window.emailjs.send(
          this.config.serviceId,
          this.config.templateId,
          emailData,
          this.config.userId
        )
        return { success: true, data: response }
      } else {
        throw new Error('EmailJS no está disponible')
      }
    } catch (error) {
      console.error('Error sending email with EmailJS:', error)
      throw error
    }
  }

  // Enviar email usando Formspree
  async sendEmailWithFormspree(emailData) {
    try {
      const formspreeEndpoint = process.env.NUXT_FORMSPREE_ENDPOINT || 'https://formspree.io/f/your_form_id'
      
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData)
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      return { success: true, data: await response.json() }
    } catch (error) {
      console.error('Error sending email with Formspree:', error)
      throw error
    }
  }

  // Enviar email usando tu propio backend
  async sendEmailWithBackend(formData) {
    try {
      const backendEndpoint = '/api/contact'
      
      // Obtener el idioma actual del usuario
      const currentLanguage = localStorage.getItem('locale') || 'es'
      
      // Agregar el idioma a los datos del formulario
      const dataWithLanguage = {
        ...formData,
        language: currentLanguage
      }
      
      console.log('Enviando datos a la API:', dataWithLanguage)
      
      const response = await fetch(backendEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataWithLanguage)
      })
      
      console.log('Respuesta de la API:', response.status, response.statusText)
      
      if (!response.ok) {
        const errorData = await response.json()
        console.error('Error de la API:', errorData)
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message || 'Error desconocido'}`)
      }
      
      const result = await response.json()
      console.log('Resultado exitoso de la API:', result)
      return { success: true, data: result }
    } catch (error) {
      console.error('Error sending email with backend:', error)
      throw error
    }
  }

  // Método principal para enviar email
  async sendEmail(formData) {
    // Validar datos
    const validation = this.validateFormData(formData)
    if (!validation.isValid) {
      throw new Error('Datos del formulario inválidos')
    }

    // Intentar diferentes métodos de envío (API local primero)
    const methods = [
      () => this.sendEmailWithBackend(formData),
      () => this.sendEmailWithEmailJS(this.prepareEmailData(formData)),
      () => this.sendEmailWithFormspree(this.prepareEmailData(formData))
    ]

    for (const method of methods) {
      try {
        return await method()
      } catch (error) {
        console.warn('Método de envío falló, intentando siguiente:', error)
        continue
      }
    }

    // Si todos los métodos fallan, simular envío exitoso para desarrollo
    if (process.env.NODE_ENV === 'development') {
      console.log('Simulando envío de email en desarrollo:', formData)
      await new Promise(resolve => setTimeout(resolve, 2000))
      return { success: true, data: { message: 'Email simulado en desarrollo' } }
    }

    throw new Error('No se pudo enviar el email con ningún método disponible')
  }
}

// Instancia singleton
export const emailService = new EmailService() 