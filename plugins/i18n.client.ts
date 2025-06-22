import { nextTick } from 'vue'
import { useI18n } from '~/composables/useI18n'

export default defineNuxtPlugin(() => {
  // Solo ejecutar en el cliente
  if (import.meta.client) {
    const savedLocale = localStorage.getItem('locale')
    if (savedLocale && (savedLocale === 'es' || savedLocale === 'en')) {
      nextTick(() => {
        const { setLocale } = useI18n()
        setLocale(savedLocale)
      })
    }
  }
}) 