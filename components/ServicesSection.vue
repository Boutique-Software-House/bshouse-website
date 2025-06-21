<template>
  <section id="services" class="services section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t('services.title') }}</h2>
        <p class="section-subtitle">{{ t('services.subtitle') }}</p>
      </div>
      
      <div class="services-grid">
        <div class="service-card stagger-item" v-for="service in services" :key="service.id">
          <div class="service-icon">
            <i :class="service.icon"></i>
          </div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
          <ul class="service-features">
            <li v-for="feature in service.features" :key="feature">
              <i class="las la-check"></i>
              {{ feature }}
            </li>
          </ul>
          <div class="service-deliverables">
            <h4>{{ t('services.deliverables') }}:</h4>
            <div class="deliverables-list">
              <span v-for="deliverable in service.deliverables" :key="deliverable" class="deliverable-tag">
                {{ deliverable }}
              </span>
            </div>
          </div>
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

const services = computed(() => [
  {
    id: 1,
    icon: 'las la-mobile-alt',
    title: t('services.mobile.title'),
    description: t('services.mobile.description'),
    features: [
      t('services.mobile.features.native'),
      t('services.mobile.features.flutter'),
      t('services.mobile.features.performance'),
      t('services.mobile.features.integration')
    ],
    deliverables: [
      t('services.mobile.deliverables.appStore'),
      t('services.mobile.deliverables.playStore'),
      t('services.mobile.deliverables.sourceCode'),
      t('services.mobile.deliverables.documentation')
    ]
  },
  {
    id: 2,
    icon: 'las la-desktop',
    title: t('services.web.title'),
    description: t('services.web.description'),
    features: [
      t('services.web.features.pwa'),
      t('services.web.features.fullstack'),
      t('services.web.features.seo'),
      t('services.web.features.integration')
    ],
    deliverables: [
      t('services.web.deliverables.webApp'),
      t('services.web.deliverables.admin'),
      t('services.web.deliverables.api'),
      t('services.web.deliverables.hosting')
    ]
  },
  {
    id: 3,
    icon: 'las la-server',
    title: t('services.enterprise.title'),
    description: t('services.enterprise.description'),
    features: [
      t('services.enterprise.features.analysis'),
      t('services.enterprise.features.custom'),
      t('services.enterprise.features.legacy'),
      t('services.enterprise.features.automation')
    ],
    deliverables: [
      t('services.enterprise.deliverables.system'),
      t('services.enterprise.deliverables.manuals'),
      t('services.enterprise.deliverables.training'),
      t('services.enterprise.deliverables.support')
    ]
  },
  {
    id: 4,
    icon: 'las la-palette',
    title: t('services.design.title'),
    description: t('services.design.description'),
    features: [
      t('services.design.features.pixelPerfect'),
      t('services.design.features.wireframes'),
      t('services.design.features.prototypes'),
      t('services.design.features.branding')
    ],
    deliverables: [
      t('services.design.deliverables.research'),
      t('services.design.deliverables.wireframes'),
      t('services.design.deliverables.prototype'),
      t('services.design.deliverables.designSystem')
    ]
  },
  {
    id: 5,
    icon: 'las la-chart-line',
    title: t('services.consulting.title'),
    description: t('services.consulting.description'),
    features: [
      t('services.consulting.features.audit'),
      t('services.consulting.features.roadmap'),
      t('services.consulting.features.optimization'),
      t('services.consulting.features.training')
    ],
    deliverables: [
      t('services.consulting.deliverables.audit'),
      t('services.consulting.deliverables.strategy'),
      t('services.consulting.deliverables.implementation'),
      t('services.consulting.deliverables.followUp')
    ]
  },
  {
    id: 6,
    icon: 'las la-tools',
    title: t('services.maintenance.title'),
    description: t('services.maintenance.description'),
    features: [
      t('services.maintenance.features.monitoring'),
      t('services.maintenance.features.security'),
      t('services.maintenance.features.optimization'),
      t('services.maintenance.features.support')
    ],
    deliverables: [
      t('services.maintenance.deliverables.monitoring'),
      t('services.maintenance.deliverables.updates'),
      t('services.maintenance.deliverables.support'),
      t('services.maintenance.deliverables.optimization')
    ]
  }
])
</script>

<style scoped>
@import 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css';

.services {
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.service-card {
  background: white;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  border: 1px solid var(--border-color);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  box-shadow: var(--shadow-md);
}

.service-icon {
  width: 50px;
  height: 50px;
  background: var(--primary-color);
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.service-icon i {
  font-size: 20px;
  color: white;
}

.service-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
  font-family: 'Montserrat', sans-serif;
}

.service-description {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.5;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 0.9rem;
  flex-grow: 1;
}

.service-features {
  list-style: none;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.service-features li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
}

.service-features i {
  color: var(--primary-color);
  font-size: 12px;
}

.service-deliverables {
  margin-top: auto;
}

.service-deliverables h4 {
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
  font-family: 'Montserrat', sans-serif;
}

.deliverables-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.deliverable-tag {
  background: var(--background-light);
  color: var(--text-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  border: 1px solid var(--border-color);
}

/* Responsive */
@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .service-card {
    padding: 1.5rem;
  }
  
  .service-icon {
    width: 50px;
    height: 50px;
  }
  
  .service-icon i {
    font-size: 20px;
  }
  
  .service-title {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .service-icon {
    width: 50px;
    height: 50px;
  }
  
  .service-icon i {
    font-size: 20px;
  }
  
  .service-title {
    font-size: 1.1rem;
  }
  
  .deliverables-list {
    justify-content: center;
  }
}
</style> 