<template>
  <div v-if="showBanner" class="cookie-banner">
    <span>{{ t('cookies.message') }}
      <a href="/privacy" target="_blank" rel="noopener noreferrer">{{ t('cookies.link') }}</a>.
    </span>
    <button class="cookie-btn" @click="acceptCookies">{{ t('cookies.accept') }}</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from '~/composables/useI18n'
const { t } = useI18n()

const showBanner = ref(false)

onMounted(() => {
  if (!localStorage.getItem('cookiesAccepted')) {
    showBanner.value = true
  }
})

function acceptCookies() {
  localStorage.setItem('cookiesAccepted', 'true')
  showBanner.value = false
}
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #222;
  color: #fff;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  z-index: 9999;
  font-size: 0.95rem;
  box-shadow: 0 -2px 8px rgba(0,0,0,0.08);
}
.cookie-banner a {
  color: #4fc3f7;
  text-decoration: underline;
}
.cookie-btn {
  background: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  margin-left: 1rem;
  transition: background 0.2s;
}
.cookie-btn:hover {
  background: var(--secondary-color);
}
</style> 