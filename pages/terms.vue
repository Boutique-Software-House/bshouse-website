<template>
  <section class="terms-section section">
    <div class="container">
      <h1 class="section-title">{{ t('terms.title') }}</h1>
      <div class="terms-content">
        <p>{{ t('terms.intro') }}</p>
        <h2>{{ t('terms.copyrightTitle') }}</h2>
        <p>{{ t('terms.copyright') }}</p>
        <h2>{{ t('terms.disclaimerTitle') }}</h2>
        <p>{{ t('terms.disclaimer') }}</p>
        <h2>{{ t('terms.externalLinksTitle') }}</h2>
        <p>{{ t('terms.externalLinks') }}</p>
        <h2>{{ t('terms.severabilityTitle') }}</h2>
        <p>{{ t('terms.severability') }}</p>
        <h2>{{ t('terms.jurisdictionTitle') }}</h2>
        <p>{{ t('terms.jurisdiction') }}</p>
        <h2>{{ t('terms.contactTitle') }}</h2>
        <p>{{ t('terms.contact') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '~/composables/useI18n'
const { t } = useI18n()
</script>

<style scoped>
.terms-section {
  background: var(--background-light);
  padding: 80px 0;
}
.terms-content {
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  color: var(--text-primary);
}
.terms-content h2 {
  margin-top: 2rem;
  color: var(--primary-color);
  font-size: 1.2rem;
}
.terms-content p {
  margin-bottom: 1.2rem;
  line-height: 1.7;
}
</style> 