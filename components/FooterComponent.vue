<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-logo animated-icons">
            <span class="footer-icon diamond"><i class="las la-gem"></i></span>
            <span class="footer-icon code"><i class="las la-code"></i></span>
            <span class="footer-icon home"><i class="las la-home"></i></span>
          </div>
          <p class="footer-description">
            {{ t('footer.description') }}
          </p>
        </div>
        
        <div class="footer-section">
          <h4>{{ t('footer.services') }}</h4>
          <ul class="footer-links">
            <li><a href="#services">{{ t('footer.servicesLinks.mobile') }}</a></li>
            <li><a href="#services">{{ t('footer.servicesLinks.web') }}</a></li>
            <li><a href="#services">{{ t('footer.servicesLinks.enterprise') }}</a></li>
            <li><a href="#services">{{ t('footer.servicesLinks.design') }}</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>{{ t('footer.company') }}</h4>
          <ul class="footer-links">
            <li><a href="#methodology">{{ t('footer.companyLinks.methodology') }}</a></li>
            <li><a href="#case-studies">{{ t('footer.companyLinks.caseStudies') }}</a></li>
            <li><a href="#technologies">{{ t('footer.companyLinks.technologies') }}</a></li>
            <li><a href="#contact">{{ t('footer.companyLinks.contact') }}</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>{{ t('footer.followUs') }}</h4>
          <div class="social-links">
            <a href="https://linkedin.com/company/boutique-software-house" target="_blank" rel="noopener" class="social-link">
              <i class="lab la-linkedin"></i>
              <span>{{ t('footer.socialLinks.linkedin') }}</span>
            </a>
            <a href="https://twitter.com/bshouse" target="_blank" rel="noopener" class="social-link">
              <i class="lab la-twitter"></i>
              <span>{{ t('footer.socialLinks.twitter') }}</span>
            </a>
            <a href="https://instagram.com/boutiquesoftwarehouse" target="_blank" rel="noopener" class="social-link">
              <i class="lab la-instagram"></i>
              <span>{{ t('footer.socialLinks.instagram') }}</span>
            </a>
            <a href="https://github.com/boutique-software-house" target="_blank" rel="noopener" class="social-link">
              <i class="lab la-github"></i>
              <span>{{ t('footer.socialLinks.github') }}</span>
            </a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p>&copy; {{ new Date().getFullYear() }} Boutique Software House. {{ t('footer.copyright') }}</p>
          <div class="footer-bottom-links">
            <a href="/privacy">{{ t('footer.legal.privacy') }}</a>
            <a href="/terms">{{ t('footer.legal.terms') }}</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from '~/composables/useI18n'

const { t } = useI18n()
</script>

<style scoped>
@import 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css';

.footer {
  background: var(--background-dark);
  color: white;
  padding: 3rem 0 1rem;
  margin-top: 4rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h4 {
  color: var(--primary-color);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  font-family: 'Montserrat', sans-serif;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.logo-img {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  object-fit: cover;
}

.footer-logo h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}

.footer-description {
  color: var(--text-light);
  line-height: 1.6;
  font-size: 0.9rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: var(--text-light);
  text-decoration: none;
  transition: var(--transition);
  font-size: 0.9rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
}

.footer-links a:hover {
  color: var(--primary-color);
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-light);
  text-decoration: none;
  transition: var(--transition);
  font-size: 0.9rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  padding: 0.5rem;
  border-radius: var(--border-radius);
}

.social-link:hover {
  color: var(--primary-color);
  background: rgba(59, 130, 246, 0.1);
}

.social-link i {
  font-size: 1.1rem;
  width: 20px;
  text-align: center;
}

.footer-bottom {
  border-top: 1px solid var(--border-color-dark);
  padding-top: 1.5rem;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-bottom p {
  color: var(--text-light);
  font-size: 0.85rem;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
}

.footer-bottom-links {
  display: flex;
  gap: 1.5rem;
}

.footer-bottom-links a {
  color: var(--text-light);
  text-decoration: none;
  font-size: 0.85rem;
  transition: var(--transition);
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
}

.footer-bottom-links a:hover {
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }
  
  .footer-bottom-links {
    justify-content: center;
  }
}
</style> 