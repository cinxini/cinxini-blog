<template>
  <v-container id="main-content" :width="containerWidth">
    <SectionTitle title="Recent Blog Posts" icon="fa-solid fa-quote-right" />
    <ContentList :articles="posts" class="mt-10" />
    <div class="d-flex flex-row ga-2">
      <NuxtLink v-for="i in numPages" :to="`/blog/page/i`">{{ i }}</NuxtLink>
    </div>
    <!-- <v-pagination :length="numPages" v-model="currPage" next-icon="fa-solid fa-caret-right"
      prev-icon="fa-solid fa-caret-left" rounded="lg" color="base" active-color="primary" :previous="refresh()"
      :next="route.push({ path: '/blog/page/1' })"></v-pagination> -->
  </v-container>
</template>

<script setup>

import ContentList from '@/components/containers/ContentList.vue';
import SectionTitle from '@/components/display/SectionTitle.vue';
import { useNuxtDisplay } from '@/composables/nuxtDisplay';
import { computed, ref } from 'vue';
const viewport = useViewport()
const appConfig = useAppConfig()
const route = useRoute()
console.log(route.params)
const { width: containerWidth } = useNuxtDisplay(viewport.breakpoint);
const currPage = ref(route.query.page ? Number(route.query.page) : 1);

const fetchPosts = async (pageNo) => {
  return queryContent('/blog')
    .where({ draft: false })
    .sort({ 'dates.published': -1 })
    .skip(skip.value)
    .limit(appConfig.maxPostPerPage)
    .find()
}

const skip = computed(() => {
  return (currPage.value - 1) * appConfig.maxPostPerPage
})
const { data: posts, refresh } = await useAsyncData('blogPostList', async () => {
  console.log('call')
  return fetchPosts(currPage.value);
})

const { data: numPosts } = await useAsyncData('blogPostCount', () => {
  return queryContent('/blog')
    .where({ draft: false })
    .count()
})

const numPages = computed(() => {
  if (numPosts.value === 0 || numPosts.value < appConfig.maxPostPerPag) return 1;
  return Math.ceil(numPosts.value / appConfig.maxPostPerPage);
})


</script>

<style></style>
