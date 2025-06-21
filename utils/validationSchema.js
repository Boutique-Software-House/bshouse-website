import * as yup from 'yup'

// Esquema de validación para el formulario de contacto
export const contactFormSchema = yup.object({
  name: yup
    .string()
    .required('El nombre es obligatorio')
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no puede exceder 50 caracteres'),
  
  email: yup
    .string()
    .required('El email es obligatorio')
    .email('Por favor ingresa un email válido')
    .max(100, 'El email no puede exceder 100 caracteres'),
  
  company: yup
    .string()
    .required('La empresa es obligatoria')
    .min(2, 'El nombre de la empresa debe tener al menos 2 caracteres')
    .max(100, 'El nombre de la empresa no puede exceder 100 caracteres'),
  
  phone: yup
    .string()
    .required('El teléfono es obligatorio')
    .matches(
      /^[\+]?[1-9][\d\s\-\(\)]{7,15}$/,
      'Por favor ingresa un teléfono válido'
    ),
  
  projectType: yup
    .string()
    .required('El tipo de proyecto es obligatorio')
    .oneOf(
      ['web-development', 'mobile-development', 'consulting', 'other'],
      'Por favor selecciona un tipo de proyecto válido'
    ),
  
  budget: yup
    .string()
    .optional(),
  
  message: yup
    .string()
    .required('El mensaje es obligatorio')
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(1000, 'El mensaje no puede exceder 1000 caracteres'),
  
  newsletter: yup
    .boolean()
    .optional()
})

// Esquema de validación en inglés
export const contactFormSchemaEn = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters'),
  
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email')
    .max(100, 'Email cannot exceed 100 characters'),
  
  company: yup
    .string()
    .required('Company is required')
    .min(2, 'Company name must be at least 2 characters')
    .max(100, 'Company name cannot exceed 100 characters'),
  
  phone: yup
    .string()
    .required('Phone is required')
    .matches(
      /^[\+]?[1-9][\d\s\-\(\)]{7,15}$/,
      'Please enter a valid phone number'
    ),
  
  projectType: yup
    .string()
    .required('Project type is required')
    .oneOf(
      ['web-development', 'mobile-development', 'consulting', 'other'],
      'Please select a valid project type'
    ),
  
  budget: yup
    .string()
    .optional(),
  
  message: yup
    .string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message cannot exceed 1000 characters'),
  
  newsletter: yup
    .boolean()
    .optional()
})

// Función para obtener el esquema según el idioma
export const getContactFormSchema = (locale = 'es') => {
  // Mensajes de validación en español
  const messages = {
    es: {
      name: {
        required: 'El nombre es obligatorio',
        min: 'El nombre debe tener al menos 2 caracteres',
        max: 'El nombre no puede exceder 50 caracteres'
      },
      email: {
        required: 'El email es obligatorio',
        email: 'Por favor ingresa un email válido',
        max: 'El email no puede exceder 100 caracteres'
      },
      company: {
        required: 'La empresa es obligatoria',
        min: 'El nombre de la empresa debe tener al menos 2 caracteres',
        max: 'El nombre de la empresa no puede exceder 100 caracteres'
      },
      phone: {
        required: 'El teléfono es obligatorio',
        matches: 'Por favor ingresa un teléfono válido'
      },
      projectType: {
        required: 'El tipo de proyecto es obligatorio',
        oneOf: 'Por favor selecciona un tipo de proyecto válido'
      },
      message: {
        required: 'El mensaje es obligatorio',
        min: 'El mensaje debe tener al menos 10 caracteres',
        max: 'El mensaje no puede exceder 1000 caracteres'
      }
    },
    en: {
      name: {
        required: 'Name is required',
        min: 'Name must be at least 2 characters',
        max: 'Name cannot exceed 50 characters'
      },
      email: {
        required: 'Email is required',
        email: 'Please enter a valid email',
        max: 'Email cannot exceed 100 characters'
      },
      company: {
        required: 'Company is required',
        min: 'Company name must be at least 2 characters',
        max: 'Company name cannot exceed 100 characters'
      },
      phone: {
        required: 'Phone is required',
        matches: 'Please enter a valid phone number'
      },
      projectType: {
        required: 'Project type is required',
        oneOf: 'Please select a valid project type'
      },
      message: {
        required: 'Message is required',
        min: 'Message must be at least 10 characters',
        max: 'Message cannot exceed 1000 characters'
      }
    }
  }

  const currentMessages = messages[locale] || messages.es

  return yup.object({
    name: yup
      .string()
      .required(currentMessages.name.required)
      .min(2, currentMessages.name.min)
      .max(50, currentMessages.name.max),
    
    email: yup
      .string()
      .required(currentMessages.email.required)
      .email(currentMessages.email.email)
      .max(100, currentMessages.email.max),
    
    company: yup
      .string()
      .required(currentMessages.company.required)
      .min(2, currentMessages.company.min)
      .max(100, currentMessages.company.max),
    
    phone: yup
      .string()
      .required(currentMessages.phone.required)
      .matches(
        /^[\+]?[1-9][\d\s\-\(\)]{7,15}$/,
        currentMessages.phone.matches
      ),
    
    projectType: yup
      .string()
      .required(currentMessages.projectType.required)
      .oneOf(
        ['web-development', 'mobile-development', 'consulting', 'other'],
        currentMessages.projectType.oneOf
      ),
    
    budget: yup
      .string()
      .optional(),
    
    message: yup
      .string()
      .required(currentMessages.message.required)
      .min(10, currentMessages.message.min)
      .max(1000, currentMessages.message.max),
    
    newsletter: yup
      .boolean()
      .optional()
  })
} 