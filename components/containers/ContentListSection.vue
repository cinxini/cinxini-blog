<template>
  <div>
    <ContentList :articles="posts" class="mt-10" />
    <div class="d-flex flex-row ga-3 justify-center align-center mt-5">
      <v-btn nuxt variant="plain" icon="fa-solid fa-caret-left" color="base" density="compact"
        :disabled="page === 1 ? true : false" :to="`/blog/page/${prevPage}`"></v-btn>

      <v-btn nuxt v-for="i in numPages" :to="`/blog/page/${i}`" min-width="10" variant="text"
        :color="i === page ? 'primary' : 'base'" rounded="lg" class="pagination my-0">{{ i }}</v-btn>
      <v-btn nuxt variant="plain" icon="fa-solid fa-caret-right" color="base" density="compact"
        :disabled="page === numPages ? true : false" :to="`/blog/page/${nextPage}`"></v-btn>
    </div>
  </div>
</template>

<script setup>
import ContentList from '@/components/containers/ContentList.vue';

import { computed, ref } from 'vue';
const route = useRoute()
const appConfig = useAppConfig()
// console.log(route.params.slug[0])
const page = ref(route.params.slug ? Number(route.params.slug[0]) : 1)

const { data: posts } = await useAsyncData(`post-list-page-${page.value}`, async () => {
  const pageNo = route.params.slug ? Number(route.params.slug[0]) : 1;
  const dat = await queryContent('/blog')
    .where({ draft: false })
    .sort({ 'dates.published': -1 })
    .skip((pageNo - 1) * appConfig.maxPostPerPage)
    .limit(appConfig.maxPostPerPage)
    .find()
  console.log(dat)
  return dat
})
console.log(posts.value)
const { data: numPosts } = await useAsyncData('blogPostCount', () => {
  return queryContent('/blog')
    .where({ draft: false })
    .count()
})

const numPages = computed(() => {
  if (numPosts.value === 0 || numPosts.value < appConfig.maxPostPerPag) return 1;
  return Math.ceil(numPosts.value / appConfig.maxPostPerPage);
})
console.log('numPages', numPages.value)

const prevPage = computed(() => {
  if (page.value - 1 > 0) {
    return page.value - 1;
  }
})

const nextPage = computed(() => {
  if (page.value + 1 <= numPages.value) {
    return page.value + 1;
  }
})
</script>

<style scoped></style>