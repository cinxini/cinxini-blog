<template>
  <div class="d-flex flex-row justify-space-between">
    <v-card v-for="featured in featureds" :key="featured._path" :width="`32%`" class="d-flex flex-column align-center">
      <MetaTop :category="featured.category" :date="featured.dates.published" />
      <v-hover v-slot="{ isHovering, props }">
        <v-avatar size="140" class="my-3 avatar" v-bind="props" :class="`elevation-${isHovering ? 1 : 0}`"
          variant="flat" rounded="xl">
          <img :src="featured.cover" alt="my avatar image" />
        </v-avatar>
      </v-hover>

      <p class="frontpage-meta" style="text-align: center;">
        <NuxtLink class="meta-title" :to="featured._path">{{ featured.title }}</NuxtLink>
      </p>
      <MetaTags :tags="featured.tags" class="my-1"></MetaTags>
    </v-card>
  </div>
</template>

<script setup>
import MetaTop from '@/components/containers/MetaTop.vue';
import MetaTags from '@/components/containers/MetaTags.vue';
const props = defineProps({
  featureds: {
    type: Object
  }
})
</script>

<style></style>