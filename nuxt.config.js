export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'JedenCode-Nuxt',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },

      { property: 'og:site_name', content: 'Jedencode' },
      { property: 'og:title', content: 'Jedencode' },
      { property: 'og:description', content: 'Jedencode' },
      { property: 'og:type', content: 'website' },
      { property: '"og:url', content: 'https://jedenkoor.ru/' },
      { property: 'og:image', content: '/images/og-share-img.jpg' },
      { property: 'og:image:width', content: '1800' },
      { property: 'og:image:height', content: '945' },

      { name: 'msapplication-TileColor', content: '#000000' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/favicon/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon/favicon-16x16.png' },
      { rel: 'manifest', href: '/images/favicon/site.webmanifest' },
      { rel: 'mask-icon', href: '/images/favicon/safari-pinned-tab.svg', color: '#000000' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css/normalize.css',
    '@/assets/styles/variables/mixins.scss',
    '@/assets/styles/variables/colors.scss',
    '@/assets/styles/variables/indents.scss',
    '@/assets/styles/variables/fonts.scss',
    '@/assets/styles/global.scss',
  ],

  styleResources: {
    scss: ['@/assets/styles/variables/*.scss']
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
