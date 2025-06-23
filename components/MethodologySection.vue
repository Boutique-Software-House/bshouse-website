<template>
  <section id="methodology" class="methodology section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t('methodology.title') }}</h2>
        <p class="section-subtitle">{{ t('methodology.subtitle') }}</p>
      </div>
      
      <div class="methodology-process">
        <div class="process-step stagger-item" v-for="(step, index) in processSteps" :key="index">
          <div class="step-content">
            <div class="step-header">
              <div class="step-icon">
                <i :class="step.icon"></i>
              </div>
              <h3 class="step-title">{{ step.title }}</h3>
            </div>
            <p class="step-description">{{ step.description }}</p>
            <div class="step-benefits">
              <div class="benefit" v-for="benefit in step.benefits" :key="benefit">
                <i class="las la-check"></i>
                <span>{{ benefit }}</span>
              </div>
            </div>
          </div>
          <div class="step-connector" v-if="index < processSteps.length - 1">
            <i class="las la-arrow-right"></i>
          </div>
        </div>
      </div>
      
      <div class="methodology-highlight animate-up">
        <div class="highlight-card">
          <div class="highlight-icon">
            <i class="las la-gem"></i>
          </div>
          <h3>{{ t('methodology.highlight.title') }}</h3>
          <p>{{ t('methodology.highlight.description') }}</p>
          <div class="highlight-metrics">
            <div class="metric">
              <span class="metric-value">80%</span>
              <span class="metric-label">{{ t('methodology.highlight.metrics.developmentTime') }}</span>
            </div>
            <div class="metric">
              <span class="metric-value">100%</span>
              <span class="metric-label">{{ t('methodology.highlight.metrics.clarity') }}</span>
            </div>
            <div class="metric">
              <span class="metric-value">∞</span>
              <span class="metric-label">{{ t('methodology.highlight.metrics.iterations') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()

const processSteps = computed(() => [
  {
    icon: 'las la-lightbulb',
    title: t('methodology.steps.discovery.title'),
    description: t('methodology.steps.discovery.description'),
    benefits: [
      t('methodology.steps.discovery.benefits.requirement'),
      t('methodology.steps.discovery.benefits.analysis'),
      t('methodology.steps.discovery.benefits.planning')
    ]
  },
  {
    icon: 'las la-pencil-ruler',
    title: t('methodology.steps.design.title'),
    description: t('methodology.steps.design.description'),
    benefits: [
      t('methodology.steps.design.benefits.ux'),
      t('methodology.steps.design.benefits.prototyping'),
      t('methodology.steps.design.benefits.feedback')
    ]
  },
  {
    icon: 'las la-code',
    title: t('methodology.steps.development.title'),
    description: t('methodology.steps.development.description'),
    benefits: [
      t('methodology.steps.development.benefits.agile'),
      t('methodology.steps.development.benefits.quality'),
      t('methodology.steps.development.benefits.testing')
    ]
  },
  {
    icon: 'las la-rocket',
    title: t('methodology.steps.deployment.title'),
    description: t('methodology.steps.deployment.description'),
    benefits: [
      t('methodology.steps.deployment.benefits.launch'),
      t('methodology.steps.deployment.benefits.monitoring'),
      t('methodology.steps.deployment.benefits.support')
    ]
  }
])
</script>

<style scoped>
@import 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css';

.methodology {
  background: var(--background-light);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.methodology-process {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  margin-bottom: 4rem;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

.process-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
}

.step-content {
  background: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  border: 1px solid var(--border-color);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.step-content:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.step-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-shrink: 0;
}

.step-icon {
  width: 60px;
  height: 60px;
  background: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  box-shadow: var(--shadow-sm);
}

.step-icon i {
  font-size: 24px;
  color: white;
}

.step-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0;
  color: var(--text-primary);
  font-family: 'Montserrat', sans-serif;
}

.step-description {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 1rem;
  flex-grow: 1;
  min-height: 0;
}

.step-benefits {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex-shrink: 0;
  margin-top: auto;
}

.benefit {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  padding: 0.5rem;
  border-radius: var(--border-radius);
  background: var(--background-light);
  text-align: left;
}

.benefit i {
  color: var(--primary-color);
  font-size: 12px;
  flex-shrink: 0;
}

.step-connector {
  position: absolute;
  top: 50%;
  right: -2.5rem;
  display: flex;
  align-items: center;
  z-index: 1;
  transform: translateY(-50%);
}

.step-connector i {
  color: var(--primary-color);
  font-size: 16px;
  animation: slideRight 2s ease-in-out infinite;
  background: white;
  border-radius: 50%;
  padding: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 2px solid var(--primary-color);
}

@keyframes slideRight {
  0%, 100% {
    transform: translateX(0);
    opacity: 0.8;
  }
  50% {
    transform: translateX(4px);
    opacity: 1;
  }
}

.methodology-highlight {
  display: flex;
  justify-content: center;
}

.highlight-card {
  background: white;
  color: var(--text-primary);
  padding: 3rem;
  border-radius: var(--border-radius);
  text-align: center;
  max-width: 800px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
}

.highlight-icon {
  width: 60px;
  height: 60px;
  background: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.highlight-icon i {
  font-size: 24px;
  color: white;
}

.highlight-card h3 {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  font-family: 'Montserrat', sans-serif;
}

.highlight-card p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: var(--text-secondary);
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
}

.highlight-metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}

.metric {
  text-align: center;
}

.metric-value {
  display: block;
  font-size: 2rem;
  font-weight: 500;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-family: 'Montserrat', sans-serif;
}

.metric-label {
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
}

/* Responsive */
@media (max-width: 1200px) {
  .methodology-process {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  .step-connector {
    display: none;
  }
}

@media (max-width: 768px) {
  .methodology-process {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;
  }
  
  .step-content {
    padding: 1.5rem;
  }
  
  .step-benefits {
    gap: 0.75rem;
  }
  
  .step-title {
    font-size: 1.25rem;
  }
  
  .step-description {
    font-size: 1rem;
  }
  
  .highlight-card {
    padding: 2rem;
  }
  
  .highlight-metrics {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .step-number {
    width: 50px;
    height: 50px;
    font-size: 1.25rem;
  }
  
  .step-icon {
    width: 50px;
    height: 50px;
  }
  
  .step-icon i {
    font-size: 20px;
  }
  
  .step-title {
    font-size: 1.1rem;
  }
  
  .step-content {
    padding: 1rem;
  }
  
  .step-description {
    font-size: 0.95rem;
  }
  
  .benefit {
    font-size: 0.9rem;
    padding: 0.4rem;
  }
  
  .highlight-card {
    padding: 1.5rem;
  }
  
  .highlight-card h3 {
    font-size: 1.25rem;
  }
  
  .connector-line {
    height: 30px;
  }
  
  .step-connector i {
    font-size: 16px;
  }
}
</style> 