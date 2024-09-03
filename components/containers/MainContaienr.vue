<template>
  <v-container id="main-content" :width="containerWidth">
    <slot />
  </v-container>
</template>

<script setup>
import { useNuxtDisplay } from '@/composables/nuxtDisplay';

const viewport = useViewport()
const { width: containerWidth } = useNuxtDisplay(viewport.breakpoint);
</script>

<style></style>