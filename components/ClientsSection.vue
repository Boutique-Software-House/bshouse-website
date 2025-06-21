<template>
  <section class="clients section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Clientes que Confían en Nosotros</h2>
        <p class="section-subtitle">
          Trabajamos con empresas líderes que valoran la calidad, la innovación y la metodología de previsualización
        </p>
      </div>
      
      <div class="clients-grid">
        <div class="client-card" v-for="client in clients" :key="client.id">
          <div class="client-logo">
            <img :src="client.logo" :alt="client.name" />
          </div>
          <div class="client-info">
            <h3 class="client-name">{{ client.name }}</h3>
            <p class="client-industry">{{ client.industry }}</p>
            <div class="client-projects">
              <span class="project-count">{{ client.projects }} proyectos</span>
            </div>
          </div>
          <div class="client-testimonial" v-if="client.testimonial">
            <p>"{{ client.testimonial }}"</p>
          </div>
        </div>
      </div>
      
      <div class="clients-stats">
        <div class="stat-item">
          <div class="stat-number">50+</div>
          <div class="stat-label">Proyectos Completados</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">100%</div>
          <div class="stat-label">Satisfacción Cliente</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">5+</div>
          <div class="stat-label">Años de Experiencia</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">∞</div>
          <div class="stat-label">Iteraciones Sin Costo</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const clients = [
  {
    id: 1,
    name: 'Mercedes-Benz',
    industry: 'Automotriz',
    logo: '/images/mercedes-benz.png',
    projects: 3,
    testimonial: 'La metodología de previsualización nos permitió validar cada funcionalidad antes del desarrollo, resultando en un producto final que superó nuestras expectativas.'
  },
  {
    id: 2,
    name: 'Daimler Truck',
    industry: 'Transporte',
    logo: '/images/daimler_truck.png',
    projects: 2,
    testimonial: 'Boutique Software House transformó nuestra visión en una aplicación móvil excepcional. El proceso de previsualización fue clave para el éxito.'
  },
  {
    id: 3,
    name: 'Daimler Financial Services',
    industry: 'Servicios Financieros',
    logo: '/images/daimler_truck_fsm.png',
    projects: 4,
    testimonial: 'La metodología de previsualización nos dio la confianza necesaria para proceder con el desarrollo.'
  },
  {
    id: 4,
    name: 'Buenos Aires Ciudad',
    industry: 'Gobierno',
    logo: '/images/buenos_aires_ciudad.png',
    projects: 2,
    testimonial: 'Excelente trabajo en la creación de sistemas que mejoran la experiencia de los ciudadanos.'
  },
  {
    id: 5,
    name: 'Adecco',
    industry: 'Recursos Humanos',
    logo: '/images/adecco.png',
    projects: 1,
    testimonial: 'Profesionalismo y calidad excepcional en el desarrollo de nuestra plataforma.'
  },
  {
    id: 6,
    name: 'Mercedes-Benz Financiera',
    industry: 'Finanzas',
    logo: '/images/mercedes-benz_financiera.png',
    projects: 2,
    testimonial: 'La metodología de previsualización nos dio la confianza necesaria para proceder con el desarrollo.'
  },
  {
    id: 7,
    name: 'Arcor',
    industry: 'Alimentación',
    logo: '/images/arcor.png',
    projects: 1,
    testimonial: 'Resultados excepcionales en la optimización de nuestros procesos internos.'
  },
  {
    id: 8,
    name: 'Ingredion',
    industry: 'Manufactura',
    logo: '/images/ingredion.png',
    projects: 1,
    testimonial: 'Sistema robusto y escalable que cumple perfectamente con nuestras necesidades.'
  }
]
</script>

<style scoped>
@import 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css';

.clients {
  background: var(--background-light);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.clients-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.client-card {
  background: white;
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-md);
  transition: var(--transition);
  border: 1px solid var(--border-color);
}

.client-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--primary-color);
}

.client-logo {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: var(--background-light);
  border-radius: var(--border-radius);
}

.client-logo img {
  max-height: 60px;
  max-width: 200px;
  object-fit: contain;
  filter: grayscale(100%);
  transition: var(--transition);
}

.client-card:hover .client-logo img {
  filter: grayscale(0%);
}

.client-info {
  text-align: center;
  margin-bottom: 1.5rem;
}

.client-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.client-industry {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.client-projects {
  display: flex;
  justify-content: center;
}

.project-count {
  background: var(--primary-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.client-testimonial {
  background: var(--background-light);
  padding: 1rem;
  border-radius: var(--border-radius);
  border-left: 4px solid var(--primary-color);
  font-style: italic;
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.5;
}

.clients-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.stat-item {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  transition: var(--transition);
}

.stat-item:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  display: block;
}

.stat-label {
  color: var(--text-secondary);
  font-weight: 500;
}

/* Responsive */
@media (max-width: 768px) {
  .clients-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .client-card {
    padding: 1.5rem;
  }
  
  .clients-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .stat-item {
    padding: 1.5rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .clients-stats {
    grid-template-columns: 1fr;
  }
  
  .client-logo img {
    max-height: 50px;
  }
  
  .client-name {
    font-size: 1.1rem;
  }
}
</style> 