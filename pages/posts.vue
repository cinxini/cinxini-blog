<template>
  <v-container id="main-content" :width="containerWidth">
    <SectionTitle title="Recent Blog Posts" icon="fa-solid fa-quote-right" />
    <ContentQuery path="/blog" v-slot="{ data }" :where="{ draft: false }" :sort="{ 'dates.published': -1 }" :limit="2"
      :skip="skip">
      <!-- <pre>{{ data }}</pre> -->
      <!-- <ContentRenderer :value="data" /> -->
      <ContentList :articles="data" class="mt-10" />
    </ContentQuery>
    <!-- <ContentList :articles="posts" class="mt-10" /> -->
    <v-pagination :length="numPages" v-model="currPage" next-icon="fa-solid fa-caret-right"
      prev-icon="fa-solid fa-caret-left" rounded="lg" color="base" active-color="primary"
      @input="gotoPage(currPage)"></v-pagination>
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
console.log(route)
const { width: containerWidth } = useNuxtDisplay(viewport.breakpoint);
const currPage = ref(1);

const fetchPosts = async (pageNo) => {
  return queryContent('/blog')
    .where({ draft: false })
    .sort({ 'dates.published': -1 })
    .skip((pageNo - 1) * appConfig.maxPostPerPage)
    .limit(appConfig.maxPostPerPage)
    .find()
}

const skip = computed(() => {
  return (currPage.value - 1) * appConfig.maxPostPerPage
})
const { data: posts } = await useAsyncData('blogPostList', async () => {
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

watch(currPage, async (newPage) => {
  console.log(newPage)
  await navigateTo('/posts?page=' + newPage)
})

const gotoPage = async (pageNo) => {
  // let link = document.createElement('a');

  // link.href = `${route.path}?page=${pageNo}`;
  // link.click()
  console.log(pageNo)
  const data = await fetchPosts(pageNo);
  posts.value = data;

}
</script>

<style></style>