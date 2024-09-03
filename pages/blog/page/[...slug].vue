<template>
  <v-container id="main-content" :width="containerWidth" class="w-60">
    <SectionTitle title="Recent Blog Posts" icon="fa-solid fa-quote-right" />
    <ContentSection></ContentSection>
  </v-container>
</template>

<script setup>
import ContentSection from '@/components/containers/ContentListSection.vue';
import SectionTitle from '@/components/display/SectionTitle.vue';
import { useNuxtDisplay } from '@/composables/nuxtDisplay';


const viewport = useViewport()
const { width: containerWidth } = useNuxtDisplay(viewport.breakpoint);

</script>

<style></style>