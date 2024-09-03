<template>
  <v-container class="w-60">
    <!-- <pre>{{ route.path }}</pre> -->
    <ContentSection></ContentSection>
  </v-container>
</template>

<script setup>
import ContentSection from '@/components/containers/ContentListSection.vue';
const route = useRoute();

</script>

<style></style>