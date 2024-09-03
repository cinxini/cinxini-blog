<template>
  <div class="d-flex flex-row ga-1">
    <v-chip density="comfortable" rounded="sm" size="small" color="base">
      <v-icon icon="fa-solid fa-folder" start size="x-small"></v-icon>
      {{ category }}</v-chip>
    <v-chip variant="text" size="small" density="comfortable">
      <v-icon icon="fa-regular fa-calendar" size="x-small" color="base" start />
      {{ date }}
    </v-chip>
  </div>
</template>

<script setup>
const props = defineProps({
  category: String,
  date: String
})
</script>

<style></style>