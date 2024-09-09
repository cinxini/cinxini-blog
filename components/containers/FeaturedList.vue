<template>
  <div class="d-flex flex-row justify-space-between">
    <v-card v-for="featured in featureds" :key="featured._path" :width="`32%`"
      class="d-flex flex-column align-center pa-2 ga-0">
      <MetaTop :category="featured.category" :date="featured.dates.published" />

      <v-avatar size="140" class="my-3 avatar" variant="flat" rounded="xl">
        <img :src="featured.cover" alt="my avatar image" />
      </v-avatar>


      <p class="frontpage-meta " style="text-align: center;">
        <NuxtLink class="meta-title" :to="featured._path">{{ featured.title }}</NuxtLink>
      </p>
      <MetaTags :tags="featured.tags" class="my-1  justify-center"></MetaTags>
    </v-card>
  </div>
</template>

<script setup>
import MetaTags from '@/components/containers/MetaTags.vue';
import MetaTop from '@/components/containers/MetaTop.vue';
const props = defineProps({
  featureds: {
    type: Object
  }
})
</script>

<style scoped>
.frontpage-meta a.meta-title {
  font-size: 1.1em;
  text-align: center;
  font-weight: 450;
  color: rgb(var(--v-theme-primary))
}
</style>