<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-title>Cinxini's Dev Blog</v-app-bar-title>
      <template v-slot:append>
        <v-btn nuxt to="/">
          Home
        </v-btn>
        <v-btn nuxt to="/about">
          About
        </v-btn>
        <v-btn nuxt to="/posts">
          Blog
        </v-btn>
        <v-btn icon="fa-solid fa-magnifying-glass"></v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>

  </v-app>
</template>

<script setup>
</script>

<style></style>