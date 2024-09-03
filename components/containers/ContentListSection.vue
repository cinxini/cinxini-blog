<template>
  <div>
    <pre>{{ route.path }}</pre>
    <ContentList :articles="posts" class="mt-10" />
    <div class="d-flex flex-row ga-2">
      <NuxtLink v-for="i in numPages" :to="`/blog/page/${i}`">{{ i }}</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import ContentList from '@/components/containers/ContentList.vue';

import { computed, ref } from 'vue';
const route = useRoute()
const appConfig = useAppConfig()
console.log(route.params.slug[0])
const page = ref(Number(route.params.slug[0]))

const { data: posts } = await useAsyncData(`post-list-page-${route.params.slug[0]}`, async () => {
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
</script>

<style></style>