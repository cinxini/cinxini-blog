<template>
  <div class="d-flex flex-row ga-1 align-center">
    <v-icon icon="fa-solid fa-tags" size="x-small" color="secondary" />
    <div v-for="tag in tags" :key="tag">
      <v-hover>
        <template v-slot:default="{ isHovering, props }">
          <v-chip nuxt v-bind="props" link size="small" density="compact" pill
            :color="isHovering ? 'secondary' : 'base'" variant="tonal" :to="`/tag/${tag}`">
            {{ tag }}</v-chip>
        </template>
      </v-hover>
    </div>

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