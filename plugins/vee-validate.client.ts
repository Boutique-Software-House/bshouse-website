import { defineNuxtPlugin } from '#app'
import { configure } from 'vee-validate'

export default defineNuxtPlugin(() => {
  // Configurar VeeValidate
  configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: false,
    validateOnModelUpdate: true
  })
}) 