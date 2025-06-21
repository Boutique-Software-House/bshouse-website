import { onMounted, onUnmounted } from 'vue'

export const useScrollAnimations = () => {
  let observer: IntersectionObserver | null = null

  const initScrollAnimations = () => {
    // Configuración del Intersection Observer
    const options = {
      root: null,
      rootMargin: '0px 0px -100px 0px', // Trigger cuando el elemento está 100px antes del viewport
      threshold: 0.1
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated')
          
          // Para elementos con stagger animation
          if (entry.target.classList.contains('stagger-item')) {
            const parent = entry.target.parentElement
            if (parent) {
              const siblings = parent.querySelectorAll('.stagger-item')
              siblings.forEach((sibling, index) => {
                setTimeout(() => {
                  sibling.classList.add('animated')
                }, index * 100)
              })
            }
          }
        }
      })
    }, options)

    // Observar elementos con clases de animación
    const animatedElements = document.querySelectorAll(
      '.animate-on-scroll, .animate-left, .animate-right, .animate-scale, .animate-up, .stagger-item'
    )
    
    animatedElements.forEach((el) => {
      if (observer) {
        observer.observe(el)
      }
    })
  }

  const addAnimationClasses = () => {
    // Agregar clases de animación a elementos específicos
    const sections = document.querySelectorAll('section')
    
    sections.forEach((section, index) => {
      // Títulos de sección
      const titles = section.querySelectorAll('.section-title, .section-subtitle')
      titles.forEach((title, titleIndex) => {
        title.classList.add('animate-on-scroll')
        if (title instanceof HTMLElement) {
          title.style.animationDelay = `${0.2 + titleIndex * 0.1}s`
        }
      })

      // Cards y elementos en grid
      const cards = section.querySelectorAll('.service-card, .case-study-card, .contact-method')
      cards.forEach((card, cardIndex) => {
        card.classList.add('stagger-item')
        if (card instanceof HTMLElement) {
          card.style.transitionDelay = `${cardIndex * 0.1}s`
        }
      })

      // Elementos alternados (izquierda/derecha)
      const alternatingElements = section.querySelectorAll('.hero-text, .hero-visual, .contact-info, .contact-form-container')
      alternatingElements.forEach((el, elIndex) => {
        if (elIndex % 2 === 0) {
          el.classList.add('animate-left')
        } else {
          el.classList.add('animate-right')
        }
      })

      // Elementos que aparecen desde abajo
      const upElements = section.querySelectorAll('.hero-stats, .clients-stats, .tech-highlight')
      upElements.forEach((el) => {
        el.classList.add('animate-up')
      })
    })
  }

  const cleanup = () => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  }

  onMounted(() => {
    // Esperar a que el DOM esté listo
    setTimeout(() => {
      addAnimationClasses()
      initScrollAnimations()
    }, 100)
  })

  onUnmounted(() => {
    cleanup()
  })

  return {
    initScrollAnimations,
    addAnimationClasses,
    cleanup
  }
} 