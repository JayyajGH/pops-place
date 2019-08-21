
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/normalize.css',
    '@/assets/css/global.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      'nuxt-i18n'
    ]
  ],
  i18n: {
   locales: [
     {code: 'en', name: 'English', iso: 'en-GB'},
     {code: 'sl', name: 'Slovenščina', iso: 'sl'}
   ],
   defaultLocale: 'en',
   vueI18n: {
     fallbackLocale: 'en',
     messages: {
       en: {
         beer: 'Beer',
         food: 'Food',
         gallery: 'Gallery',
         about: 'About',
         contact: 'Contact'
       },
       sl: {
         beer: 'Pivo',
         food: 'Hrana',
         gallery: 'Galerija',
         about: 'O Nas',
         contact: 'Kontakt'
       }
     }
   }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.devtool = '#source-map'
      }
    }
  }
}
