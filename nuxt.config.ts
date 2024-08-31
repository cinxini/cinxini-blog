// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  app: {
    head: {
      // link: [
      //   {
      //     rel: 'stylesheet',
      //     href: "https://use.fontawesome.com/releases/v5.0.13/css/all.css"
      //   }
      // ]
      // script: [
      //   {
      //     src: 'https://kit.fontawesome.com/ae224cd0da.js',
      //     crossorigin: 'anonymous'
      //   }
      // ]
    }
  },

  devtools: { enabled: true },
  modules: [(_options, nuxt) => {
    nuxt.hooks.hook('vite:extendConfig', (config) => {
      // @ts-expect-error
      config.plugins.push(vuetify({ autoImport: true }))
    })
  },'@nuxt/content'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2024-08-31',

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})