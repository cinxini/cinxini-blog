<template>
  <v-app>
    <v-app-bar id="navbar" color="background" :elevation="0" height="50">
      <!-- <v-app-bar-title>Cinxini's Dev Blog</v-app-bar-title> -->
      <template v-slot:prepend>
        <v-img :width="120" aspect-ratio="16/9" cover src="@/assets/images/logo.png"></v-img>
      </template>
      <template v-slot:append>
        <v-btn v-for="item in navItems" :key="item.path" nuxt class="nav-btn mx-1" color="base" active-color="primary"
          :to="item.path">
          {{ item.title }}
        </v-btn>
        <v-btn icon="fa-solid fa-magnifying-glass" size="small" color="base"></v-btn>
      </template>
    </v-app-bar>
    <v-main style="padding-top: 50px;">
      <slot />
    </v-main>

  </v-app>
</template>

<script setup>
const navItems = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Blog', path: '/posts' },
]
</script>

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

#navbar .nav-btn {
  font-weight: bold;
}
</style>