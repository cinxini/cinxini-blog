// import this after install `@mdi/font` package
import candyTheme from "@/assets/themes/candy.json";
import '@fortawesome/fontawesome-free/css/all.css'; // Ensure your project is capable of handling css files
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import { aliases, fa } from 'vuetify/iconsets/fa';
import 'vuetify/styles';

console.log(candyTheme)
export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        // ... your configuration
        ssr: true,
        theme: {
          defaultTheme: 'candyTheme',
          themes: {
            candyTheme,
          },
          variations: {
            colors: ['primary', 'base'],
            lighten: 3,
            darken: 3,
          },
        },
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
