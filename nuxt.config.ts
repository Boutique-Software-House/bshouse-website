// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  modules: [
    'nuxt-gtag'
  ],

  gtag: {
    enabled: true,
    id: "G-45ZCVR2RR8",
    config: {
      page_title: "Boutique Software House - Metodología de Prototipado",
    },
  },

  app: {
    head: {
      title: 'Boutique Software House - Transformando ideas en experiencias digitales',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Somos una boutique de software que elimina el gap entre expectativas y realidad. Nuestra metodología única de prototipado te permite ver exactamente lo que vas a recibir antes de escribir una sola línea de código.' 
        },
        { name: 'keywords', content: 'desarrollo de software, prototipado, UX/UI, aplicaciones móviles, aplicaciones web, sistemas empresariales' },
        { property: 'og:title', content: 'Boutique Software House' },
        { property: 'og:description', content: 'Transformando ideas en experiencias digitales con metodología de prototipado única' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://bshouse.io' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Boutique Software House' },
        { name: 'twitter:description', content: 'Transformando ideas en experiencias digitales' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap' }
      ]
    }
  },

  compatibilityDate: '2025-06-19',

  build: {
    transpile: ['vee-validate']
  }
})