<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="contact-content">
        <div class="contact-info animate-left">
          <h2 class="section-title">{{ t('contact.title') }}</h2>
          <p class="section-subtitle">{{ t('contact.subtitle') }}</p>
          
          <div class="international-presence">
            <div class="presence-badge">
              <i class="las la-globe"></i>
              <span>{{ t('contact.international.title') }}</span>
            </div>
            <div class="countries-grid">
              <div class="country-card">
                <div class="country-flag">🇦🇷</div>
                <h4>{{ t('contact.international.argentina.title') }}</h4>
                <a href="https://maps.google.com/?q=Av+del+Libertador+5990,+Oficina+403,+CABA,+Argentina" target="_blank" rel="noopener noreferrer" class="country-link">
                  <i class="las la-map-marker"></i>
                  <span v-html="t('contact.international.argentina.address')"></span>
                </a>
                <a href="tel:+541136563300" class="country-link">
                  <i class="las la-phone"></i>
                  <span>{{ t('contact.international.argentina.phone') }}</span>
                </a>
                <a href="mailto:{{ t('contact.international.argentina.email') }}" class="country-link">
                  <i class="las la-envelope"></i>
                  <span>{{ t('contact.international.argentina.email') }}</span>
                </a>
              </div>
              <div class="country-card">
                <div class="country-flag">🇺🇸</div>
                <h4>{{ t('contact.international.usa.title') }}</h4>
                <a href="https://maps.google.com/?q=19790+West+Dixie+Highway,+Unit+1130,+Miami,+FL+33180" target="_blank" rel="noopener noreferrer" class="country-link">
                  <i class="las la-map-marker"></i>
                  <span v-html="t('contact.international.usa.address')"></span>
                </a>
                <a href="tel:+17868195867" class="country-link">
                  <i class="las la-phone"></i>
                  <span>{{ t('contact.international.usa.phone') }}</span>
                </a>
                <a href="mailto:{{ t('contact.international.usa.email') }}" class="country-link">
                  <i class="las la-envelope"></i>
                  <span>{{ t('contact.international.usa.email') }}</span>
                </a>
              </div>
            </div>
          </div>
          
          <!-- <div class="contact-methods">
            <div class="contact-method stagger-item">
              <div class="method-icon">
                <i class="las la-envelope"></i>
              </div>
              <div class="method-content">
                <h3>{{ t('contact.methods.email.title') }}</h3>
                <p class="method-value">{{ t('contact.methods.email.value') }}</p>
                <p class="method-description">{{ t('contact.methods.email.description') }}</p>
              </div>
            </div>
            
            <div class="contact-method stagger-item">
              <div class="method-icon">
                <i class="las la-phone"></i>
              </div>
              <div class="method-content">
                <h3>{{ t('contact.methods.phone.title') }}</h3>
                <p class="method-value">{{ t('contact.methods.phone.value') }}</p>
                <p class="method-description">{{ t('contact.methods.phone.description') }}</p>
              </div>
            </div>
            
            <div class="contact-method stagger-item">
              <div class="method-icon">
                <i class="las la-map-marker"></i>
              </div>
              <div class="method-content">
                <h3>{{ t('contact.methods.location.title') }}</h3>
                <p class="method-value">{{ t('contact.methods.location.value') }}</p>
                <p class="method-description">{{ t('contact.methods.location.description') }}</p>
              </div>
            </div>
          </div> -->
        </div>
        
        <div id="contact-form" class="contact-form-container animate-right">
          <form @submit.prevent="submitForm" class="contact-form">
            <div v-if="submitMessage" class="submit-message" :class="submitMessageType">
              {{ submitMessage }}
            </div>
            
            <div class="form-group">
              <label for="name" class="form-label">{{ t('contact.form.name') }}</label>
              <Field
                name="name"
                v-slot="{ field, errorMessage, meta }"
              >
                <input
                  id="name"
                  v-bind="field"
                  type="text"
                  class="form-input"
                  :class="{ 'error': errorMessage, 'success': meta.valid && meta.touched }"
                  :placeholder="t('contact.form.placeholders.name')"
                />
              </Field>
              <ErrorMessage name="name" class="error-message" />
            </div>
            
            <div class="form-group">
              <label for="email" class="form-label">{{ t('contact.form.email') }}</label>
              <Field
                name="email"
                v-slot="{ field, errorMessage, meta }"
              >
                <input
                  id="email"
                  v-bind="field"
                  type="email"
                  class="form-input"
                  :class="{ 'error': errorMessage, 'success': meta.valid && meta.touched }"
                  :placeholder="t('contact.form.placeholders.email')"
                />
              </Field>
              <ErrorMessage name="email" class="error-message" />
            </div>
            
            <div class="form-group">
              <label for="company" class="form-label">{{ t('contact.form.company') }}</label>
              <Field
                name="company"
                v-slot="{ field, errorMessage, meta }"
              >
                <input
                  id="company"
                  v-bind="field"
                  type="text"
                  class="form-input"
                  :class="{ 'error': errorMessage, 'success': meta.valid && meta.touched }"
                  :placeholder="t('contact.form.placeholders.company')"
                />
              </Field>
              <ErrorMessage name="company" class="error-message" />
            </div>
            
            <div class="form-group">
              <label for="phone" class="form-label">{{ t('contact.form.phone') }}</label>
              <Field
                name="phone"
                v-slot="{ field, errorMessage, meta }"
              >
                <input
                  id="phone"
                  v-bind="field"
                  type="tel"
                  class="form-input"
                  :class="{ 'error': errorMessage, 'success': meta.valid && meta.touched }"
                  :placeholder="t('contact.form.placeholders.phone')"
                />
              </Field>
              <ErrorMessage name="phone" class="error-message" />
            </div>
            
            <div class="form-group">
              <label for="projectType" class="form-label">{{ t('contact.form.projectType') }}</label>
              <Field
                name="projectType"
                v-slot="{ field, errorMessage, meta }"
              >
                <select
                  id="projectType"
                  v-bind="field"
                  class="form-input"
                  :class="{ 'error': errorMessage, 'success': meta.valid && meta.touched }"
                >
                  <option value="">{{ t('contact.form.placeholders.projectType') }}</option>
                  <option value="web-development">{{ t('contact.form.options.webDevelopment') }}</option>
                  <option value="mobile-development">{{ t('contact.form.options.mobileDevelopment') }}</option>
                  <option value="consulting">{{ t('contact.form.options.consulting') }}</option>
                  <option value="other">{{ t('contact.form.options.other') }}</option>
                </select>
              </Field>
              <ErrorMessage name="projectType" class="error-message" />
            </div>
            
            <div class="form-group">
              <label for="budget" class="form-label">{{ t('contact.form.budget') }}</label>
              <Field
                name="budget"
                v-slot="{ field }"
              >
                <select
                  id="budget"
                  v-bind="field"
                  class="form-input"
                >
                  <option value="">{{ t('contact.form.options.budget.placeholder') }}</option>
                  <option value="small">{{ t('contact.form.options.budget.small') }}</option>
                  <option value="medium">{{ t('contact.form.options.budget.medium') }}</option>
                  <option value="large">{{ t('contact.form.options.budget.large') }}</option>
                  <option value="enterprise">{{ t('contact.form.options.budget.enterprise') }}</option>
                  <option value="discuss">{{ t('contact.form.options.budget.discuss') }}</option>
                </select>
              </Field>
            </div>
            
            <div class="form-group">
              <label for="message" class="form-label">{{ t('contact.form.message') }}</label>
              <Field
                name="message"
                v-slot="{ field, errorMessage, meta }"
              >
                <textarea
                  id="message"
                  v-bind="field"
                  class="form-textarea"
                  :class="{ 'error': errorMessage, 'success': meta.valid && meta.touched }"
                  :placeholder="t('contact.form.placeholders.message')"
                  rows="4"
                ></textarea>
              </Field>
              <ErrorMessage name="message" class="error-message" />
            </div>
            
            <div class="form-checkbox">
              <Field
                name="newsletter"
                v-slot="{ field }"
              >
                <input
                  id="newsletter"
                  v-bind="field"
                  type="checkbox"
                />
              </Field>
              <label for="newsletter">{{ t('contact.form.newsletter') }}</label>
            </div>
            
            <button
              type="submit"
              class="submit-btn"
              :disabled="isSubmitting || !meta.valid"
            >
              <span v-if="isSubmitting">{{ t('contact.form.sending') }}</span>
              <span v-else>{{ t('contact.form.submit') }}</span>
            </button>
            
            <div v-if="submitMessage" class="submit-message" :class="submitMessageType">
              {{ submitMessage }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { useForm, Field, ErrorMessage } from 'vee-validate'
import { emailService } from '~/utils/emailService'
import { getContactFormSchema } from '~/utils/validationSchema'
import { useI18n } from '~/composables/useI18n'

const { t, locale } = useI18n()

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitMessageType = ref('')

// Obtener el esquema de validación según el idioma
const validationSchema = computed(() => getContactFormSchema(locale.value))

// Configurar el formulario con VeeValidate
const { handleSubmit, meta, resetForm } = useForm({
  validationSchema,
  initialValues: {
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
    newsletter: false
  }
})

// Función para hacer scroll suave al formulario
const scrollToForm = () => {
  const formElement = document.getElementById('contact-form')
  if (formElement) {
    formElement.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    })
  }
}

// Exponer la función globalmente para que otros componentes puedan usarla
onMounted(() => {
  window.scrollToContactForm = scrollToForm
})

// Enviar formulario
const submitForm = handleSubmit(async (values) => {
  isSubmitting.value = true
  submitMessage.value = ''
  submitMessageType.value = ''
  
  try {
    // Usar el servicio de email
    const result = await emailService.sendEmail(values)
    
    if (result.success) {
      // Mostrar mensaje de éxito
      submitMessage.value = t('contact.form.success')
      submitMessageType.value = 'success'
      
      // Limpiar formulario
      resetForm()
      
      // Limpiar mensaje después de 5 segundos
      setTimeout(() => {
        submitMessage.value = ''
        submitMessageType.value = ''
      }, 5000)
    } else {
      throw new Error('Error en el envío del formulario')
    }
    
  } catch (error) {
    console.error('Error sending form:', error)
    submitMessage.value = t('contact.form.error')
    submitMessageType.value = 'error'
    
    // Limpiar mensaje de error después de 5 segundos
    setTimeout(() => {
      submitMessage.value = ''
      submitMessageType.value = ''
    }, 5000)
  } finally {
    isSubmitting.value = false
  }
})
</script>

<style scoped>
@import 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css';

.contact-section {
  background: var(--background-light);
  padding: 80px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-card {
  background: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
}

.info-icon {
  width: 60px;
  height: 60px;
  background: var(--primary-color);
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.info-icon i {
  font-size: 24px;
  color: white;
}

.info-card h3 {
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: var(--text-primary);
  font-family: 'Montserrat', sans-serif;
}

.info-card p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
}

.info-benefits {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.benefit {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
}

.benefit i {
  color: var(--primary-color);
  font-size: 12px;
}

/* .contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.method {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
}

.method-icon {
  width: 40px;
  height: 40px;
  background: var(--primary-color);
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.method-icon i {
  font-size: 16px;
  color: white;
}

.method-info h4 {
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  color: var(--text-primary);
  font-family: 'Montserrat', sans-serif;
}

.method-info p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 0.25rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}

.method-info span {
  font-size: 0.8rem;
  color: var(--text-secondary);
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
} */

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
}

.form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-family: 'Montserrat', sans-serif;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: 0.9rem;
  font-family: 'Montserrat', sans-serif;
  transition: var(--transition);
  background: white;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  cursor: pointer;
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
}

.checkbox-label input[type="checkbox"] {
  display: none;
}

.checkmark {
  width: 18px;
  height: 18px;
  border: 2px solid var(--border-color);
  border-radius: 3px;
  position: relative;
  flex-shrink: 0;
  margin-top: 2px;
  transition: var(--transition);
}

.checkbox-label input[type="checkbox"]:checked + .checkmark {
  background: var(--primary-color);
  border-color: var(--primary-color);
}

.checkbox-label input[type="checkbox"]:checked + .checkmark::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 12px;
  font-weight: 500;
}

.btn-submit {
  width: 100%;
  padding: 1rem;
  background: var(--primary-color);
  color: white;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
}

.btn-submit:hover:not(:disabled) {
  background: var(--secondary-color);
  transform: translateY(-2px);
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.btn-submit i {
  margin-right: 8px;
}

/* Responsive */
@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .countries-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .country-card {
    padding: 1.5rem;
  }
  
  .presence-badge {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
  
  .country-flag {
    font-size: 2.5rem;
  }
  
  .country-card h4 {
    font-size: 1.1rem;
  }
  
  .country-phone {
    font-size: 1rem !important;
  }
}

@media (max-width: 480px) {
  .contact-section {
    padding: 60px 0;
  }
  
  .countries-grid {
    gap: 1rem;
  }
  
  .country-card {
    padding: 1rem;
  }
  
  .country-flag {
    font-size: 2rem;
  }
  
  .country-card h4 {
    font-size: 1rem;
  }
  
  .country-phone {
    font-size: 0.9rem !important;
  }
}

.international-presence {
  margin-bottom: 2rem;
  text-align: center;
}

.presence-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-primary);
  padding: 0.5rem 0;
  font-weight: 600;
  margin-bottom: 1.5rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  border-bottom: 2px solid var(--primary-color);
}

.presence-badge i {
  font-size: 18px;
  color: var(--primary-color);
}

.countries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.country-card {
  background: white;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
  text-align: center;
  transition: var(--transition);
}

.country-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.country-flag {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
}

.country-card h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
  font-family: 'Montserrat', sans-serif;
}

.country-card p {
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 0.5rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
}

.country-phone {
  font-weight: 600 !important;
  color: var(--primary-color) !important;
  font-size: 1rem !important;
  margin-top: 0.75rem !important;
}

.country-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 400;
  padding: 0.4rem 0;
  transition: var(--transition);
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
}

.country-link:hover {
  color: var(--primary-color);
  transform: translateX(5px);
}

.country-link i {
  color: var(--primary-color);
  font-size: 18px;
  font-weight: bold;
  flex-shrink: 0;
}

.country-link span {
  line-height: 1.4;
}

.form-input.error,
.form-textarea.error {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}

.form-input.success,
.form-textarea.success {
  border-color: #28a745;
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
}

.error-message {
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.submit-message {
  padding: 1rem;
  border-radius: var(--border-radius);
  margin-top: 1rem;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.submit-message.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.submit-message.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.submit-btn {
  width: 100%;
  padding: 1rem 2rem;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.submit-btn:hover:not(:disabled) {
  background: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.submit-btn:disabled:hover {
  background: var(--primary-color);
  transform: none;
  box-shadow: none;
}

.form-checkbox {
  margin-bottom: 2rem;
}

.section-subtitle {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
}
</style> 