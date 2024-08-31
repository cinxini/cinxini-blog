// import this after install `@mdi/font` package
import '@fortawesome/fontawesome-free/css/all.css'; // Ensure your project is capable of handling css files
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'
import 'vuetify/styles'

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        // ... your configuration
        icons: {
            defaultSet: 'fa',
            aliases,
            sets: {
              fa,
            },
          },
    })
    nuxtApp.vueApp.use(vuetify)
})
