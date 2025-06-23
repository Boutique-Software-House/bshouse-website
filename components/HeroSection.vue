<template>
  <section class="hero-section">
    <div class="hero-container">
      <div class="hero-content">
        <div class="hero-text animate-left">
          <h1 class="hero-title">
            {{ t('hero.title') }}
            <span class="hero-highlight">{{ t('hero.highlight') }}</span>
            <br>
            <span class="hero-subtitle">{{ t('hero.subtitle') }}</span>
          </h1>
          
          <p class="hero-description">
            {{ t('hero.description') }}
          </p>
          
          <div class="hero-actions">
            <button @click="scrollToContactForm" class="hero-cta primary">
              <i class="las la-rocket"></i>
              {{ t('hero.ctaPrimary') }}
            </button>
            <a href="#methodology" class="hero-cta secondary">
              <i class="las la-play"></i>
              {{ t('hero.ctaSecondary') }}
            </a>
          </div>
        </div>
        
        <div class="hero-visual animate-right">
          <div class="hero-animation">
            <a href="#methodology" class="floating-card card-1">
              <i class="las la-lightbulb"></i>
              <span>{{ t('methodology.steps.discovery.title') }}</span>
            </a>
            <a href="#methodology" class="floating-card card-2">
              <i class="las la-pencil-ruler"></i>
              <span>{{ t('methodology.steps.design.title') }}</span>
            </a>
            <a href="#methodology" class="floating-card card-3">
              <i class="las la-code"></i>
              <span>{{ t('methodology.steps.development.title') }}</span>
            </a>
            <a href="#methodology" class="floating-card card-4">
              <i class="las la-rocket"></i>
              <span>{{ t('methodology.steps.deployment.title') }}</span>
            </a>
          </div>
        </div>
      </div>
      
      <div class="hero-stats animate-up">
        <div class="stat-item">
          <div class="stat-number">100%</div>
          <div class="stat-label">{{ t('hero.stats.satisfaction') }}</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">0</div>
          <div class="stat-label">{{ t('hero.stats.surprises') }}</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">∞</div>
          <div class="stat-label">{{ t('hero.stats.iterations') }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()

// Función para hacer scroll al formulario de contacto
const scrollToContactForm = () => {
  if (window.scrollToContactForm) {
    window.scrollToContactForm()
  } else {
    // Fallback: scroll directo a la sección de contacto
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

