<template>
  <div class="d-flex flex-column ga-3">
    <ContentCard v-for="article in articles" :key="article._path" :content="article" />
  </div>
</template>

<script setup>
import ContentCard from '@/components/containers/ContentCard.vue';
const props = defineProps({
  articles: {
    type: Array,
    required: false,
    default: []
  }
})
</script>

<style></style>