import { ref } from 'vue'
import es from '~/locales/es.json'
import en from '~/locales/en.json'

const currentLocale = ref('es')

const translations = {
  es,
  en
} as const

type TranslationKey = keyof typeof es

export const useI18n = () => {
  const locale = currentLocale
  
  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[locale.value as keyof typeof translations]
    
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
      // Save to localStorage
      if (process.client) {
        localStorage.setItem('locale', newLocale)
      }
    }
  }
  
  const getLocale = () => locale.value
  
  const getAvailableLocales = () => [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ]
  
  // Initialize locale from localStorage
  if (process.client) {
    const savedLocale = localStorage.getItem('locale')
    if (savedLocale && savedLocale in translations) {
      locale.value = savedLocale
    }
  }
  
  return {
    t,
    locale,
    setLocale,
    getLocale,
    getAvailableLocales
  }
} 