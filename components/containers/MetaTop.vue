<template>
  <div class="d-flex flex-row ga-1">
    <v-hover>
      <template v-slot:default="{ isHovering, props }">
        <v-chip nuxt v-bind="props" density="comfortable" rounded="sm" size="small"
          :variant="isHovering ? 'tonal' : 'text'" color="tertiary" :to="`/category/${category}`">
          <v-icon icon="fa-solid fa-folder" start size="x-small"></v-icon>
          {{ category }}</v-chip>
      </template>
    </v-hover>
    <v-chip variant="text" size="small" density="comfortable" color='baseVariant'>
      <v-icon icon="fa-regular fa-calendar" size="x-small" color="baseVariant" start />
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