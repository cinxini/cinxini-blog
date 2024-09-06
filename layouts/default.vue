<script setup>
import { useDisplay } from 'vuetify';

const { smAndUp } = useDisplay()

const navItems = [
  { title: 'Home', path: '/', icon: 'fa-solid fa-house' },
  { title: 'About', path: '/about', icon: 'fa-regular fa-face-grin-wink' },
  { title: 'Blog', path: '/blog', icon: 'fa-solid fa-quote-right' },
]

</script>

<template>
  <v-app>
    <v-app-bar id="navbar" color="background" :elevation="0" :height="50">
      <template v-slot:prepend>
        <v-img :width="120" aspect-ratio="16/9" cover src="@/assets/images/logo.png"></v-img>
      </template>
      <template v-slot:append>
        <v-toolbar-items v-if="smAndUp">
          <v-btn v-for="item in navItems" :key="item.path" nuxt class="nav-btn ma-1" color="base" active-color="primary"
            rounded="lg" :to="item.path">
            {{ item.title }}
          </v-btn>
          <v-btn icon="fa-solid fa-magnifying-glass" size="small" color="base" rounded="lg"></v-btn>
        </v-toolbar-items>
        <div v-else>
          <v-dialog max-width="400" id="nav-dialog">
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn v-bind="activatorProps" color="base" icon="fa-solid fa-ellipsis-vertical" size="small"></v-btn>
            </template>

            <template v-slot:default="{ isActive }">
              <v-card>
                <v-card-text>
                  <v-list>
                    <v-list-item nuxt v-for="item in navItems" :key="item.path" base-color="base" color="primary"
                      :to="item.path" :prepend-icon="item.icon">
                      <v-list-item-title class="nav-btn">{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>
            </template>
          </v-dialog>
        </div>
      </template>
    </v-app-bar>
    <v-main style="padding-top: 50px; padding-bottom: 100px;">
      <slot />
    </v-main>

    <v-footer class="position-absolute bottom-0 w-100" style="padding-top: 30px; padding-bottom: 20px;">
      <div class="d-flex flex-column justify-center" style="width:100%;">
        <p class="footer-credit text-center">Powered by <span class="emphasis-text">Nuxt</span> & <span
            class="emphasis-text">Nuxt-Content</span>. Created with <span class="emphasis-text">Vuetify</span> & <span
            class="emphasis-text">Fontawesome</span>.</p>
      </div>

    </v-footer>
  </v-app>
</template>


<style>
:root {
  --heading-border-opacity: 0.3;
  --meta-description-firstletter-color: var(--v-theme-baseVariant);
  --md-heading-underline-opacity: 0.18;
  --md-heading-underline-color: var(--v-theme-base);
  --md-heading-section-color: var(--v-theme-primary);
  --md-heading-hover-opacity: 0.7;
  --md-heading-color: var(--v-theme-baseVariant);
  --md-pre-background-color: var(--v-theme-primary);
  --md-pre-background-opacity: 0.03;
  --md-bold-color: var(--v-theme-baseVariant);
  --md-text-color: 0 0 0;
  --md-text-size: 16px;
  --md-quote-background-color: var(--v-theme-primary);
  --md-quote-background-opaacity: 0.1;
  --md-quote-text-color: var(--v-theme-baseVariant);
  --md-link-color: var(--v-theme-primary);
}

.v-navigation-drawer {
  z-index: 999999 !important;
}

/* font */
.poppins {
  font-family: "Poppins", sans-serif;
}

head {
  font-family: "Poppins", sans-serif;
}

body {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}

#navbar {
  border-bottom: 1px solid rgba(var(--v-theme-base), var(--heading-border-opacity));
}

#navbar .nav-btn,
#nav-dialog .nav-btn {
  font-weight: bold;
  text-transform: uppercase;
}

#main-content {
  padding-top: 30px;
}

#main-content.w-95 {
  width: 95%;
}

.footer-credit {
  font-size: 0.75em;
}

.emphasis-text {
  font-weight: bold;
  color: rgb(var(--v-theme-primary));
}
</style>