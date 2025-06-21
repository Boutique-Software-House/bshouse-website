<template>
  <div class="language-selector">
    <button 
      class="language-button"
      @click="toggleDropdown"
      :aria-expanded="isOpen"
      aria-label="Seleccionar idioma"
    >
      <span class="current-flag">{{ currentLocaleFlag }}</span>
      <span class="current-code">{{ currentLocaleCode }}</span>
      <i class="las la-chevron-down" :class="{ 'rotated': isOpen }"></i>
    </button>
    
    <div class="language-dropdown" :class="{ 'open': isOpen }" v-if="isOpen">
      <button
        v-for="locale in availableLocales"
        :key="locale.code"
        class="language-option"
        @click="selectLanguage(locale.code)"
        :class="{ 'active': locale.code === currentLocale }"
      >
        <span class="flag">{{ locale.flag }}</span>
        <span class="name">{{ locale.name }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from '~/composables/useI18n'

const { locale, setLocale, getAvailableLocales } = useI18n()

const isOpen = ref(false)
const availableLocales = getAvailableLocales()

const currentLocale = computed(() => locale.value)
const currentLocaleCode = computed(() => currentLocale.value.toUpperCase())
const currentLocaleFlag = computed(() => {
  const current = availableLocales.find(l => l.code === currentLocale.value)
  return current ? current.flag : '🇪🇸'
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectLanguage = (code) => {
  setLocale(code)
  isOpen.value = false
}

const closeDropdown = (event) => {
  if (!event.target.closest('.language-selector')) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeDropdown)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>

