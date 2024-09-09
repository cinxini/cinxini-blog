<template>
  <div class="d-flex flex-row justify-space-between flex-wrap">
    <v-card v-for="recent in recents" :key="recent._path" :width="`49%`" class="mb-3 pa-1 d-flex flex-row flex-nowrap">

      <div :style="{ 'max-width': '100' + 'px', 'min-width': '100' + 'px' }">
        <NuxtLink :to="recent._path"><v-img class="position-absolute top-0"
            :src="recent.cover ? recent.cover : '/images/blog/default-cover.png'" cover :max-width="100"
            :min-width="100">
            <template v-slot:error>
              <v-img class="mx-auto" :max-width="100" :min-width="100" :src="`/images/blog/default-cover.png`"></v-img>
            </template>
          </v-img></NuxtLink>
      </div>
      <div class="d-flex flex-column">
        <MetaTop :category="recent.category" :date="recent.dates.published" />
        <p class="frontpage-meta">
          <NuxtLink class="meta-title" :to="recent._path">{{ recent.title }}</NuxtLink>
        </p>
        <MetaTags :tags="recent.tags" />
      </div>
    </v-card>
  </div>
</template>

<script setup>
import MetaTags from '@/components/containers/MetaTags.vue';
import MetaTop from '@/components/containers/MetaTop.vue';
const props = defineProps({
  recents: Object
});
</script>

<style scoped>
.frontpage-meta a.meta-title {
  font-size: 1.1em;
  text-align: center;
  font-weight: 450;
  color: rgb(var(--v-theme-primary))
}
</style>