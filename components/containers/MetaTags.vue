<template>
  <div class="d-flex flex-row ga-1 align-center">
    <v-icon icon="fa-solid fa-tags" size="x-small" color="base" />
    <v-chip nuxt v-for="tag in tags" link size="small" density="compact" pill color="base" variant="tonal"
      :to="`/tag/${tag}`">
      {{ tag }}</v-chip>
  </div>
</template>

<script setup>
const props = defineProps({
  tags: {
    type: Array,
    default: []
  }
});
</script>

<style></style>