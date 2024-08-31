<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-title>Cinxini's Dev Blog</v-app-bar-title>
      <template v-slot:append>
        <v-btn icon="fa-solid fa-magnifying-glass"></v-btn>
      </template>
    </v-app-bar>
    <div>
      <p>This is a default layout page.</p>
      <slot />
    </div>
  </v-app>
</template>

<script setup>
</script>

<style></style>