<template>
  <section id="technologies" class="technologies section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t('technologies.title') }}</h2>
        <p class="section-subtitle">
          {{ t('technologies.subtitle') }}
        </p>
      </div>
      
      <div class="tech-categories">
        <div class="tech-category" v-for="category in techCategories" :key="category.id">
          <div class="category-header">
            <div class="category-icon">
              <i :class="category.icon"></i>
            </div>
            <h3 class="category-title">{{ t(category.titleKey) }}</h3>
            <p class="category-description">{{ t(category.descriptionKey) }}</p>
          </div>
          
          <div class="tech-grid">
            <div class="tech-item" v-for="tech in category.technologies" :key="tech.name">
              <div class="tech-logo">
                <img :src="tech.logo" :alt="tech.name" />
              </div>
              <div class="tech-info">
                <h4 class="tech-name">{{ tech.name }}</h4>
                <div class="tech-level">
                  <span class="level-label">{{ t('technologies.experience') }}:</span>
                  <div class="level-bars">
                    <span 
                      v-for="i in 5" 
                      :key="i" 
                      class="level-bar"
                      :class="{ active: i <= tech.experience }"
                    ></span>
                  </div>
                </div>
                <p class="tech-description">{{ tech.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="tech-highlight">
        <div class="highlight-content">
          <div class="highlight-icon">
            <i class="las la-rocket"></i>
          </div>
          <h3>{{ t('technologies.highlight.title') }}</h3>
          <p>
            {{ t('technologies.highlight.description') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from '~/composables/useI18n'

const { t } = useI18n()

const techCategories = [
  {
    id: 1,
    icon: 'las la-mobile',
    titleKey: 'technologies.categories.mobile.title',
    descriptionKey: 'technologies.categories.mobile.description',
    technologies: [
      {
        name: 'React Native',
        logo: '/images/react-native.svg',
        experience: 5,
        description: 'Desarrollo multiplataforma con rendimiento nativo'
      },
      {
        name: 'Flutter',
        logo: '/images/flutter.svg',
        experience: 4,
        description: 'Framework de Google para apps nativas'
      },
      {
        name: 'Swift',
        logo: '/images/swift.svg',
        experience: 4,
        description: 'Lenguaje nativo para iOS'
      },
      {
        name: 'Kotlin',
        logo: '/images/kotlin.svg',
        experience: 4,
        description: 'Lenguaje moderno para Android'
      }
    ]
  },
  {
    id: 2,
    icon: 'las la-globe',
    titleKey: 'technologies.categories.web.title',
    descriptionKey: 'technologies.categories.web.description',
    technologies: [
      {
        name: 'React',
        logo: '/images/react.svg',
        experience: 5,
        description: 'Biblioteca para interfaces de usuario'
      },
      {
        name: 'Vue.js',
        logo: '/images/vue.svg',
        experience: 5,
        description: 'Framework progresivo para aplicaciones web'
      },
      {
        name: 'Angular',
        logo: '/images/angular.svg',
        experience: 4,
        description: 'Framework completo para aplicaciones web'
      },
      {
        name: 'Node.js',
        logo: '/images/nodejs.svg',
        experience: 5,
        description: 'Runtime de JavaScript para backend'
      },
      {
        name: 'TypeScript',
        logo: '/images/typescript.svg',
        experience: 4,
        description: 'JavaScript tipado para mayor robustez'
      }
    ]
  },
  {
    id: 3,
    icon: 'las la-database',
    titleKey: 'technologies.categories.database.title',
    descriptionKey: 'technologies.categories.database.description',
    technologies: [
      {
        name: 'PostgreSQL',
        logo: '/images/postgresql.svg',
        experience: 5,
        description: 'Base de datos relacional robusta'
      },
      {
        name: 'MySQL',
        logo: '/images/mysql.svg',
        experience: 4,
        description: 'Base de datos relacional de código abierto'
      },
      {
        name: 'SQL Server',
        logo: '/images/sqlserver.svg',
        experience: 4,
        description: 'Base de datos empresarial de Microsoft'
      },
      {
        name: 'Oracle',
        logo: '/images/oracle.svg',
        experience: 3,
        description: 'Base de datos empresarial de alto rendimiento'
      },
      {
        name: 'MongoDB',
        logo: '/images/mongodb.svg',
        experience: 4,
        description: 'Base de datos NoSQL flexible'
      },
      {
        name: 'Redis',
        logo: '/images/redis.svg',
        experience: 4,
        description: 'Almacenamiento en memoria para caché'
      },
      {
        name: 'Elasticsearch',
        logo: '/images/elasticsearch.svg',
        experience: 3,
        description: 'Motor de búsqueda y análisis'
      }
    ]
  },
  {
    id: 4,
    icon: 'las la-cloud',
    titleKey: 'technologies.categories.cloud.title',
    descriptionKey: 'technologies.categories.cloud.description',
    technologies: [
      {
        name: 'Azure',
        logo: '/images/azure.svg',
        experience: 4,
        description: 'Servicios cloud de Microsoft'
      },
      {
        name: 'AWS',
        logo: '/images/aws.svg',
        experience: 4,
        description: 'Servicios cloud de Amazon'
      },
      {
        name: 'Docker',
        logo: '/images/docker.svg',
        experience: 4,
        description: 'Contenedores para aplicaciones'
      },
      {
        name: 'Kubernetes',
        logo: '/images/kubernetes.svg',
        experience: 3,
        description: 'Orquestación de contenedores'
      },
      {
        name: 'CI/CD',
        logo: '/images/cicd.svg',
        experience: 4,
        description: 'Integración y despliegue continuo'
      }
    ]
  }
]
</script>

<style scoped>
@import 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css';

.technologies {
  background: var(--background-light);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.tech-categories {
  display: grid;
  gap: 4rem;
  margin-bottom: 4rem;
}

.tech-category {
  background: var(--background-light);
  padding: 2rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
}

.category-header {
  text-align: center;
  margin-bottom: 2rem;
}

.category-icon {
  width: 60px;
  height: 60px;
  background: var(--primary-color);
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.category-icon i {
  font-size: 24px;
  color: white;
}

.category-title {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-family: 'Montserrat', sans-serif;
}

.category-description {
  color: var(--text-secondary);
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.tech-item {
  background: white;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  border: 1px solid var(--border-color);
  transition: var(--transition);
}

.tech-item:hover {
  box-shadow: var(--shadow-sm);
}

.tech-logo {
  width: 50px;
  height: 50px;
  flex-shrink: 0;
}

.tech-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: var(--border-radius);
}

.tech-info {
  flex: 1;
}

.tech-name {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-family: 'Montserrat', sans-serif;
}

.tech-level {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.level-label {
  font-size: 0.8rem;
  color: var(--text-secondary);
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
}

.level-bars {
  display: flex;
  gap: 2px;
}

.level-bar {
  width: 12px;
  height: 4px;
  background: var(--border-color);
  border-radius: 2px;
  transition: var(--transition);
}

.level-bar.active {
  background: var(--primary-color);
}

.tech-description {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.4;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
}

.tech-highlight {
  background: var(--background-light);
  padding: 3rem;
  border-radius: var(--border-radius);
  text-align: center;
  border: 1px solid var(--border-color);
}

.highlight-content {
  max-width: 800px;
  margin: 0 auto;
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

.tech-highlight h3 {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: var(--text-primary);
  font-family: 'Montserrat', sans-serif;
}

.tech-highlight p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: var(--text-secondary);
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
}

/* Responsive */
@media (max-width: 768px) {
  .tech-category {
    padding: 1.5rem;
  }
  
  .tech-grid {
    grid-template-columns: 1fr;
  }
  
  .tech-item {
    padding: 1rem;
  }
  
  .tech-highlight {
    padding: 2rem;
  }
  
  .tech-highlight h3 {
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .category-icon {
    width: 50px;
    height: 50px;
  }
  
  .category-icon i {
    font-size: 20px;
  }
  
  .category-title {
    font-size: 1.25rem;
  }
  
  .tech-logo {
    width: 40px;
    height: 40px;
  }
  
  .tech-name {
    font-size: 1rem;
  }
  
  .tech-highlight {
    padding: 1.5rem;
  }
  
  .highlight-icon {
    width: 50px;
    height: 50px;
  }
  
  .highlight-icon i {
    font-size: 20px;
  }
}
</style> 