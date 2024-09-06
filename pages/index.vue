<template>
  <MainContainer>
    <SectionTitle tooltip="" title="Featured" icon="fa-solid fa-map-pin" />
    <FeaturedList :featureds="featureds" />

    <v-divider></v-divider>

    <SectionTitle tooltip="" title="In Blog" icon="fa-solid fa-inbox" />
    <div class="d-flex flex-row justify-space-between flex-wrap">
      <v-card v-for="recent in recents" :key="recent._path" :width="`49%`"
        class="mb-3 pa-1 d-flex flex-row flex-nowrap">

        <div :style="{ 'max-width': '100' + 'px', 'min-width': '100' + 'px' }">
          <NuxtLink :to="recent._path"><v-img class="position-absolute top-0"
              :src="recent.cover ? recent.cover : '/images/blog/default-cover.png'" cover :max-width="100"
              :min-width="100">
              <template v-slot:error>
                <v-img class="mx-auto" :max-width="100" :min-width="100"
                  :src="`/images/blog/default-cover.png`"></v-img>
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
  </MainContainer>
</template>

<script setup>
import FeaturedList from '@/components/containers/FeaturedList.vue';

import MetaTop from '@/components/containers/MetaTop.vue';
import MetaTags from '@/components/containers/MetaTags.vue';
import MainContainer from '@/components/containers/MainContaienr.vue';
import SectionTitle from '@/components/display/SectionTitle.vue';
const appConfig = useAppConfig()

// featured
const { data: featureds } = await useAsyncData(`featured-list`, async () => {
  const dat = await queryContent('/blog')
    .where({ draft: false, featured: true })
    .only(['title', 'category', 'tags', 'cover', 'dates', '_path'])
    .sort({ 'dates.published': -1 })
    .limit(appConfig.maxFeatured)
    .find()
  return dat
})
console.log('featureds:::', featureds.value)

// featured
const { data: recents } = await useAsyncData(`most-recent-list`, async () => {
  const dat = await queryContent('/blog')
    .where({ draft: false })
    .only(['title', 'category', 'tags', 'cover', 'dates', '_path'])
    .sort({ 'dates.published': -1 })
    .limit(appConfig.maxRecent)
    .find()
  return dat
})
console.log('recents:::', recents.value)
</script>

<style>
.frontpage-meta .meta-title {
  font-size: 1.1em;
  text-align: center;
}
</style>