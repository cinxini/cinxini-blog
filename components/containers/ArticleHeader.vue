<template>
  <div class="d-flex flex-column align-center">
    <MetaTop :category="meta.category" :date="meta.date" />
    <v-hover v-slot="{ isHovering, props }">
      <v-avatar size="140" class="my-3 avatar" v-bind="props" :class="`elevation-${isHovering ? 1 : 0}`" variant="flat">
        <img :src="meta.cover" alt="my avatar image" />
      </v-avatar>
    </v-hover>
    <p class="meta-title">{{ meta.title }}
    </p>

    <MetaTags :tags="meta.tags" class="my-1"></MetaTags>
    <p class="meta-description my-5" style="max-width: 80%;">
      {{ meta.description.slice(0, 1) }}{{ meta.description.slice(1) }}
    </p>
  </div>
</template>

<script setup>
import MetaTags from '@/components/containers/MetaTags.vue';
import MetaTop from '@/components/containers/MetaTop.vue';
const props = defineProps({
  meta: Object
})
</script>

<style scoped>
.meta-title {
  font-size: 2em;
  font-weight: 500;
  line-height: 1.333;
  letter-spacing: normal;
  color: rgb(var(--v-theme-primary));
  font-family: "Poppins", sans-serif;
}

.meta-title:hover {
  text-decoration: underline solid rgba(var(--v-theme-primary), 0.2) 4px;
  color: rgba(var(--v-theme-primary), 0.8);
}

.meta-description {
  font-family: "Poppins", sans-serif;
  font-size: 0.875rem !important;
}

.meta-description::first-letter {
  text-transform: uppercase;
  initial-letter: 2;
  color: rgb(var(--v-theme-tertiary));
  font-weight: bold;
  margin-right: .75em;
}
</style>