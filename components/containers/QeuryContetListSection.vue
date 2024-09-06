<template>
  <div>
    <p>Found {{ numPosts }} posts</p>
    <ContentList :articles="posts" class="mt-10" />
    <div class="d-flex flex-row ga-3 justify-center align-center mt-5">
      <v-btn nuxt variant="plain" icon="fa-solid fa-caret-left" color="base" density="compact"
        :disabled="currPage === 1 || currPage === null ? true : false" :to="`${fromPage}/page/${prevPage}`"></v-btn>

      <v-btn nuxt v-for="i in numPages" :to="`${fromPage}/page/${i}`" min-width="10" variant="text"
        :color="i === currPage ? 'primary' : 'base'" rounded="lg" class="pagination my-0">{{ i }}</v-btn>

      <v-btn nuxt variant="plain" icon="fa-solid fa-caret-right" color="base" density="compact"
        :disabled="currPage === numPages ? true : false" :to="`${fromPage}/page/${nextPage}`"></v-btn>
    </div>
  </div>
</template>

<script setup>
import ContentList from '@/components/containers/ContentList.vue';
import { computed, ref } from 'vue';
const route = useRoute()
const appConfig = useAppConfig()

const props = defineProps({
  query: {
    type: Object,
    default: { draft: false }
  },
  fromPage: {
    type: String,
    default: '/blog'
  },
  page: {
    type: Number,
    default: 1
  }
})

const currPage = ref(props.page);

function isNumber(value) {
  return typeof value === 'number';
}

const { data: posts } = await useAsyncData(`post-list-page-${props.fromPage}-${currPage.value}`, async () => {
  console.log('call query')
  const dat = await queryContent('/blog')
    .where(props.query)
    .sort({ 'dates.published': -1 })
    .skip((currPage.value - 1) * appConfig.maxPostPerPage)
    .limit(appConfig.maxPostPerPage)
    .find()
  return dat
})

const { data: numPosts } = await useAsyncData(`blogPostCount-${props.fromPage}-${currPage.value}`, () => {
  return queryContent('/blog')
    .where(props.query)
    .count()
})

const numPages = computed(() => {
  if (numPosts.value === 0 || numPosts.value < appConfig.maxPostPerPag) return 1;
  return Math.ceil(numPosts.value / appConfig.maxPostPerPage);
})
console.log('num posts', numPosts.value, 'num pages', numPages.value)

const prevPage = computed(() => {
  if (currPage.value - 1 > 0) {
    return currPage.value - 1;
  } else {
    return null;
  }
})

const nextPage = computed(() => {
  if (currPage.value + 1 <= numPages.value) {
    return currPage.value + 1;
  } else {
    return null;
  }
})
</script>

<style scoped></style>