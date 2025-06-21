<template>
  <section id="case-studies" class="case-studies section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Casos de Éxito</h2>
        <p class="section-subtitle">
          Proyectos que demuestran cómo nuestra metodología de previsualización 
          transforma ideas en soluciones exitosas
        </p>
      </div>
      
      <div class="case-studies-grid">
        <div class="case-study-card stagger-item" v-for="caseStudy in caseStudies" :key="caseStudy.id">
          <div class="case-study-header">
            <div class="case-study-logo">
              <img :src="caseStudy.logo" :alt="caseStudy.client" />
            </div>
            <div class="case-study-category">
              <span class="category-tag">{{ caseStudy.category }}</span>
            </div>
          </div>
          
          <div class="case-study-content">
            <h3 class="case-study-title">{{ caseStudy.title }}</h3>
            <p class="case-study-description">{{ caseStudy.description }}</p>
            
            <div class="case-study-details">
              <div class="detail-section">
                <h4>Desafío</h4>
                <p>{{ caseStudy.challenge }}</p>
              </div>
              
              <div class="detail-section">
                <h4>Solución</h4>
                <ul>
                  <li v-for="solution in caseStudy.solutions" :key="solution">{{ solution }}</li>
                </ul>
              </div>
              
              <div class="detail-section">
                <h4>Resultados</h4>
                <div class="results-grid">
                  <div class="result-item" v-for="result in caseStudy.results" :key="result.metric">
                    <span class="result-value">{{ result.value }}</span>
                    <span class="result-metric">{{ result.metric }}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="case-study-testimonial" v-if="caseStudy.testimonial">
              <blockquote>
                <p>"{{ caseStudy.testimonial.quote }}"</p>
                <footer>
                  <strong>{{ caseStudy.testimonial.author }}</strong>
                  <span>{{ caseStudy.testimonial.position }}</span>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      
      <div class="case-studies-cta animate-up">
        <div class="cta-content">
          <h3>¿Quieres ser nuestro próximo caso de éxito?</h3>
          <p>
            Nuestra metodología de previsualización ha ayudado a decenas de empresas 
            a transformar sus ideas en productos exitosos. ¿Estás listo para el siguiente?
          </p>
          <button @click="scrollToContactForm" class="btn">
            <i class="las la-rocket"></i>
            Comenzar Mi Proyecto
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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

const caseStudies = [
  {
    id: 1,
    title: 'Sistema de Gestión de Flota',
    company: 'DAIMLER TRUCK',
    logo: '/images/daimler_truck.png',
    description: 'Desarrollo de una plataforma integral para el monitoreo y gestión de flotas comerciales, incluyendo tracking en tiempo real, mantenimiento predictivo y reportes avanzados.',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
    results: [
      'Reducción del 40% en costos de mantenimiento',
      'Mejora del 60% en eficiencia operativa',
      'Implementación en 500+ vehículos'
    ]
  },
  {
    id: 2,
    title: 'Aplicación de Servicios Financieros',
    company: 'Mercedes-Benz',
    logo: '/images/mercedes-benz.png',
    description: 'Creación de una aplicación móvil para servicios financieros que permite a los clientes gestionar créditos, realizar pagos y acceder a información en tiempo real.',
    technologies: ['Flutter', 'Firebase', 'Stripe API', 'Google Cloud'],
    results: [
      'Aumento del 80% en transacciones digitales',
      'Reducción del 70% en tiempo de aprobación',
      'Satisfacción del cliente del 95%'
    ]
  },
  {
    id: 3,
    title: 'Plataforma de Gestión de Calidad',
    company: 'Ingredion',
    logo: '/images/ingredion.png',
    description: 'Sistema empresarial para el control de calidad en procesos de manufactura, incluyendo monitoreo de parámetros, alertas automáticas y reportes regulatorios.',
    technologies: ['Vue.js', 'Python', 'MongoDB', 'Docker'],
    results: [
      'Cumplimiento del 100% en estándares de calidad',
      'Reducción del 50% en tiempo de auditorías',
      'Automatización del 90% de los procesos'
    ]
  },
  {
    id: 4,
    title: 'Aplicación Ciudadana',
    company: 'Buenos Aires Ciudad',
    logo: '/images/buenos_aires_ciudad.png',
    description: 'Desarrollo de una aplicación móvil para servicios ciudadanos que permite reportar problemas, solicitar servicios y acceder a información municipal.',
    technologies: ['React Native', 'Laravel', 'MySQL', 'Azure'],
    results: [
      'Más de 100,000 descargas en el primer mes',
      'Reducción del 60% en tiempo de respuesta',
      'Mejora del 75% en satisfacción ciudadana'
    ]
  },
  {
    id: 5,
    title: 'Sistema de Gestión de RRHH',
    company: 'ADECCO',
    logo: '/images/adecco.png',
    description: 'Plataforma integral para la gestión de recursos humanos, incluyendo reclutamiento, onboarding, evaluación de desempeño y administración de beneficios.',
    technologies: ['Angular', 'Java Spring', 'PostgreSQL', 'AWS'],
    results: [
      'Reducción del 45% en tiempo de contratación',
      'Mejora del 65% en retención de empleados',
      'Automatización del 80% de procesos administrativos'
    ]
  },
  {
    id: 6,
    title: 'Sistema de Distribución',
    company: 'Arcor',
    logo: '/images/arcor.png',
    description: 'Aplicación móvil para la gestión de ventas y distribución, optimizando rutas de entrega, inventario en tiempo real y comunicación con clientes.',
    technologies: ['Flutter', 'Node.js', 'MongoDB', 'Google Maps API'],
    results: [
      'Optimización del 35% en rutas de entrega',
      'Reducción del 25% en costos logísticos',
      'Mejora del 50% en satisfacción del cliente'
    ]
  }
]
</script>

<style scoped>
@import 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css';

.case-studies {
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.case-studies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.case-study-card {
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: var(--transition);
  border: 1px solid var(--border-color);
}

.case-study-card:hover {
  box-shadow: var(--shadow-md);
}

.case-study-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: var(--background-light);
  border-bottom: 1px solid var(--border-color);
}

.case-study-logo img {
  height: 40px;
  width: auto;
  object-fit: contain;
}

.category-tag {
  background: var(--primary-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}

.case-study-content {
  padding: 2rem;
}

.case-study-title {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: var(--text-primary);
  font-family: 'Montserrat', sans-serif;
}

.case-study-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
}

.case-study-details {
  margin-bottom: 2rem;
}

.case-study-details h4 {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
  font-family: 'Montserrat', sans-serif;
}

.case-study-details p {
  color: var(--text-secondary);
  line-height: 1.6;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
}

.case-study-details ul {
  list-style: none;
  padding: 0;
}

.case-study-details li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
}

.case-study-details li::before {
  content: '✓';
  color: var(--primary-color);
  font-weight: 500;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
}

.result-item {
  text-align: center;
  padding: 1rem;
  background: var(--background-light);
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
}

.result-value {
  display: block;
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--primary-color);
  margin-bottom: 0.25rem;
  font-family: 'Montserrat', sans-serif;
}

.result-metric {
  font-size: 0.8rem;
  color: var(--text-secondary);
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
}

.case-study-testimonial {
  background: var(--background-light);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  border-left: 4px solid var(--primary-color);
  margin-top: 2rem;
}

.case-study-testimonial blockquote {
  font-style: italic;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
}

.case-study-testimonial footer {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.case-study-testimonial footer strong {
  color: var(--text-primary);
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
}

.case-study-testimonial footer span {
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
}

.case-studies-cta {
  background: white;
  padding: 3rem;
  border-radius: var(--border-radius);
  text-align: center;
  border: 1px solid var(--border-color);
}

.cta-content h3 {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: var(--text-primary);
  font-family: 'Montserrat', sans-serif;
}

.cta-content p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
}

.cta-content .btn {
  padding: 14px 28px;
  font-size: 1rem;
}

.cta-content .btn i {
  margin-right: 8px;
}

/* Responsive */
@media (max-width: 768px) {
  .case-study-header {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .case-study-content {
    padding: 1.5rem;
  }
  
  .results-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .case-studies-cta {
    padding: 2rem;
  }
  
  .cta-content h3 {
    font-size: 1.25rem;
  }
  
  .case-studies-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .case-study-title {
    font-size: 1.25rem;
  }
  
  .results-grid {
    grid-template-columns: 1fr;
  }
  
  .case-studies-cta {
    padding: 1.5rem;
  }
  
  .case-study-testimonial {
    padding: 1rem;
  }
  
  .case-study-content {
    padding: 1rem;
  }
}
</style> 