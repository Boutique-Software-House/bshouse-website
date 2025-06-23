<template>
  <section class="privacy-section section">
    <div class="container">
      <h1 class="section-title">{{ t('privacy.title') }}</h1>
      <div class="privacy-content">
        <h2>{{ t('privacy.responsableTitle') }}</h2>
        <p>{{ t('privacy.responsable') }}</p>
        <h2>{{ t('privacy.collectionTitle') }}</h2>
        <p>{{ t('privacy.collection') }}</p>
        <h2>{{ t('privacy.purposeTitle') }}</h2>
        <p>{{ t('privacy.purpose') }}</p>
        <h2>{{ t('privacy.storageTitle') }}</h2>
        <p>{{ t('privacy.storage') }}</p>
        <h2>{{ t('privacy.rightsTitle') }}</h2>
        <p>{{ t('privacy.rights') }}</p>
        <h2>{{ t('privacy.securityTitle') }}</h2>
        <p>{{ t('privacy.security') }}</p>
        <h2>{{ t('privacy.contactTitle') }}</h2>
        <p>{{ t('privacy.contact') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()
</script>

<style scoped>
.privacy-section {
  background: var(--background-light);
  padding: 80px 0;
}
.privacy-content {
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  color: var(--text-primary);
}
.privacy-content h2 {
  margin-top: 2rem;
  color: var(--primary-color);
  font-size: 1.2rem;
}
.privacy-content p {
  margin-bottom: 1.2rem;
  line-height: 1.7;
}
</style> 