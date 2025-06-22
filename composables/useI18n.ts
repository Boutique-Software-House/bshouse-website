import { ref, computed } from 'vue'
import es from '~/locales/es.json'
import en from '~/locales/en.json'

const translations = {
  es,
  en
} as const

type TranslationKey = keyof typeof es

// Estado global y reactivo para el idioma
const locale = ref(getInitialLocale())

// Función para obtener el idioma inicial
function getInitialLocale(): string {
  if (import.meta.client) {
    const savedLocale = localStorage.getItem('locale')
    if (savedLocale && savedLocale in translations) {
      return savedLocale
    }
  }
  return 'es'
}

export const useI18n = () => {
  // Computed para asegurar que siempre tengamos un valor válido
  const currentLocale = computed(() => {
    return locale.value in translations ? locale.value : 'es'
  })
  
  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[currentLocale.value as keyof typeof translations]
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key // Return the key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key
  }
  
  const setLocale = (newLocale: string) => {
    if (newLocale in translations) {
      locale.value = newLocale
      // Guardar en localStorage
      if (import.meta.client) {
        localStorage.setItem('locale', newLocale)
      }
    }
  }
  
  const getLocale = () => currentLocale.value
  
  const getAvailableLocales = () => [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ]
  
  return {
    t,
    locale: currentLocale,
    setLocale,
    getLocale,
    getAvailableLocales
  }
} 