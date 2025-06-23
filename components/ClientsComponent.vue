<template>
  <section class="clients-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t('clients.title') }}</h2>
        <p class="section-subtitle">{{ t('clients.subtitle') }}</p>
      </div>
      <div class="clients-grid">
        <!-- Primera fila: Daimler/Mercedes (4 logos) -->
        <a href="https://www.mercedes-benz-trucks.com.ar/" target="_blank" rel="noopener noreferrer" class="client-item">
          <img src="/images/daimler_truck.png" alt="DAIMLER TRUCK" />
        </a>
        <a href="https://www.daimlertruck-financialservices.mx/" target="_blank" rel="noopener noreferrer" class="client-item">
          <img src="/images/daimler_truck_fsm.png" alt="DAIMLER TRUCK Financial Services México" />
        </a>
        <a href="https://www.mbfonline.com.ar/" target="_blank" rel="noopener noreferrer" class="client-item">
          <img src="/images/mercedes-benz_financiera.png" alt="Mercedes-Benz Financiera" />
        </a>
        <a href="https://www.mercedes-benz.com.ar/" target="_blank" rel="noopener noreferrer" class="client-item">
          <img src="/images/mercedes-benz.png" alt="Mercedes-Benz" />
        </a>
        
        <!-- Segunda fila: Portas y Kella -->
        <a href="https://web.portas.com.ar/" target="_blank" rel="noopener noreferrer" class="client-item">
          <img src="/images/portas-consultora.png" alt="Portas Consultora" />
        </a>
        <a href="https://kellaleadership.com/" target="_blank" rel="noopener noreferrer" class="client-item">
          <img src="/images/kella-leadership.svg" alt="Kella Leadership" />
        </a>
        
        <!-- Tercera fila: Resto de clientes originales -->
        <a href="https://www.buenosaires.gob.ar/" target="_blank" rel="noopener noreferrer" class="client-item">
          <img src="/images/buenos_aires_ciudad.png" alt="Buenos Aires Ciudad" />
        </a>
        <a href="https://www.adecco.com/" target="_blank" rel="noopener noreferrer" class="client-item">
          <img src="/images/adecco.png" alt="ADECCO" class="logo-small" />
        </a>
        <a href="https://www.arcor.com/" target="_blank" rel="noopener noreferrer" class="client-item">
          <img src="/images/arcor.png" alt="Arcor" />
        </a>
        <a href="https://www.ingredion.com/" target="_blank" rel="noopener noreferrer" class="client-item">
          <img src="/images/ingredion.png" alt="Ingredion" class="logo-small" />
        </a>
        
        <!-- Cuarta fila: Nuevos clientes -->
        <a href="https://www.grupotaraborelli.com.ar/" target="_blank" rel="noopener noreferrer" class="client-item">
          <img src="/images/grupo-taraborelli.png" alt="Grupo Taraborelli" />
        </a>
        <a href="https://www.klasse.com.ar" target="_blank" rel="noopener noreferrer" class="client-item dealer-item">
          <img src="/images/mercedes-benz.png" alt="Klasse" class="dealer-logo" />
          <span class="dealer-name">Klasse</span>
        </a>
        <a href="https://www.bazyluk.com.ar" target="_blank" rel="noopener noreferrer" class="client-item dealer-item">
          <img src="/images/mercedes-benz.png" alt="Bazyluk" class="dealer-logo" />
          <span class="dealer-name">Bazyluk</span>
        </a>
        <a href="https://www.cantore.com.ar" target="_blank" rel="noopener noreferrer" class="client-item dealer-item">
          <img src="/images/mercedes-benz.png" alt="Cantore" class="dealer-logo" />
          <span class="dealer-name">Cantore</span>
        </a>
        <a href="https://www.automotoresfangio.com.ar" target="_blank" rel="noopener noreferrer" class="client-item dealer-item">
          <img src="/images/mercedes-benz.png" alt="Automotores Fangio" class="dealer-logo" />
          <span class="dealer-name">Automotores Fangio</span>
        </a>
        <a href="https://www.rolcar.com.ar" target="_blank" rel="noopener noreferrer" class="client-item dealer-item">
          <img src="/images/mercedes-benz.png" alt="Rolcar" class="dealer-logo" />
          <span class="dealer-name">Rolcar</span>
        </a>
        <a href="https://www.tauro.com.ar" target="_blank" rel="noopener noreferrer" class="client-item dealer-item">
          <img src="/images/mercedes-benz.png" alt="Tauro" class="dealer-logo" />
          <span class="dealer-name">Tauro</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from '~/composables/useI18n'

const { t } = useI18n()
</script>

<style scoped>
@font-face {
  font-family: 'MBCorpoSTextOfficeRegular';
  src: url('~/assets/fonts/MBCorpoSTextOfficeRegular.woff2') format('woff2'),
       url('~/assets/fonts/MBCorpoSTextOfficeRegular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

.clients-section {
  padding: 80px 0;
  background: var(--background-light);
  border: 1px solid var(--border-color);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
  font-family: 'Montserrat', sans-serif;
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-family: 'Inter', sans-serif;
}

.clients-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  align-items: center;
  justify-items: center;
}

.client-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  min-height: 120px;
  width: 200px;
  height: 120px;
  text-decoration: none;
  border: 1px solid var(--border-color);
}

.client-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.client-item img {
  max-width: 100%;
  max-height: 80px;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.client-item:hover img {
  filter: grayscale(0%);
}

/* Estilos específicos para concesionarios */
.dealer-item {
  flex-direction: row;
  justify-content: flex-start;
  gap: 15px;
  padding: 15px 20px;
  width: 200px;
}

.dealer-logo {
  max-width: 25px;
  max-height: 25px;
  flex-shrink: 0;
}

.dealer-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  text-align: left;
  line-height: 1.2;
  font-family: 'MBCorpoSTextOfficeRegular', sans-serif;
}

.dealer-item:hover .dealer-name {
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .clients-section {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
  }
  
  .clients-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
  }
  
  .client-item {
    padding: 15px;
    min-height: 100px;
    width: 150px;
    height: 100px;
  }
  
  .client-item img {
    max-height: 60px;
  }
  
  .dealer-item {
    width: 160px;
    padding: 10px 12px;
    gap: 10px;
  }
  
  .dealer-logo {
    max-width: 20px;
    max-height: 20px;
  }
  
  .dealer-name {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .clients-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  
  .client-item {
    padding: 10px;
    min-height: 80px;
    width: 120px;
    height: 80px;
  }
  
  .client-item img {
    max-height: 50px;
  }
  
  .dealer-item {
    width: 160px;
    padding: 10px 12px;
    gap: 10px;
  }
  
  .dealer-logo {
    max-width: 30px;
    max-height: 30px;
  }
  
  .dealer-name {
    font-size: 0.75rem;
  }
}

.logo-small {
  max-width: 70% !important;
  max-height: 56px !important;
  width: auto !important;
  height: auto !important;
  display: block;
  margin: 0 auto;
}
</style>

