<script setup>
import { useDisplay } from 'vuetify';

const { smAndUp } = useDisplay()

console.log
const navItems = [
  { title: 'Home', path: '/', icon: 'fa-solid fa-house' },
  { title: 'About', path: '/about', icon: 'fa-regular fa-face-grin-wink' },
  { title: 'Blog', path: '/posts', icon: 'fa-solid fa-quote-right' },
]

</script>

<template>
  <v-app>
    <v-app-bar id="navbar" color="background" :elevation="0" :height="50">
      <template v-slot:prepend>
        <v-img :width="120" aspect-ratio="16/9" cover src="@/assets/images/logo.png"></v-img>
      </template>
      <template v-slot:append>
        <!-- <div v-if="isMobile"></div> -->
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
    <v-main style="padding-top: 50px;">
      <slot />
    </v-main>

  </v-app>
</template>


<style>
:root {
  --heading-border-opacity: 0.3;
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

#main-content.w-95 {
  width: 95%;
}
</style>