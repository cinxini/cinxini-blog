<template>
  <MainContainer>
    <SectionTitle tooltip="" title="Featured" icon="fa-solid fa-map-pin" />
    <FeaturedList :featureds="featureds" />

    <v-divider></v-divider>

    <SectionTitle tooltip="" title="In Blog" icon="fa-solid fa-inbox" />
    <RecentList :recents="recents" />

  </MainContainer>
</template>

<script setup>
import FeaturedList from '@/components/containers/FeaturedList.vue';
import MainContainer from '@/components/containers/MainContaienr.vue';
import RecentList from '@/components/containers/RecentList.vue';
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
</script>

<style>
.frontpage-meta .meta-title {
  font-size: 1.1em;
  text-align: center;
}
</style>