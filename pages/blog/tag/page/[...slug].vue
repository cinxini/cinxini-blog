<template>
  <MainContainer>
    <div class="category-page-title d-flex flex-row ga-2 align-center">
      <v-icon icon="fa-solid fa-circle-question" color="baseVariant" size="small"></v-icon>
      <div>Posts
        {{ tag ? 'with' : 'in' }} <span :class="{ 'category-emphasis': tag }">{{ tag ? tag : 'all' }}</span>
        tag
      </div>
    </div>
    <!-- <DotLoader /> -->
    <!-- <ContentList :articles="posts" class="mt-10" /> -->
    <QueryContentList :query="query" :fromPage="`/blog/tag${tag ? '/' + tag : ''}`" :page="page" />

  </MainContainer>
</template>

<script setup>
import MainContainer from '@/components/containers/MainContaienr.vue';
import QueryContentList from '@/components/containers/QeuryContetListSection.vue';
// import DotLoader from '@/components/display/DotLoader.vue';

const route = useRoute()
function isNumber(value) {
  return typeof value === 'number';
}
const tag = computed(() => {
  return null;
  // if (route.params.slug) {
  //   if (route.params.slug[0] === 'page') {
  //     return null;
  //   } else {
  //     return route.params.slug[0];
  //   }
  // } else {
  //   return null;
  // }
})
console.log('/blog/tag/page/[...slug].vue::', route, route.params.slug)

const page = computed(() => {
  if (route.params.slug) {
    return Number(route.params.slug[0]);
  } else {
    return 1;
  }
})
console.log(`I am on page #${page.value} of tag::${tag.value}`)

const query = computed(() => {
  const newQuery = { draft: false }
  if (tag.value) {
    newQuery.tags = {};
    newQuery.tags.$contains = [tag.value];
  }
  console.log(newQuery)
  return newQuery;
})
</script>

<style scoped>
.category-page-title {
  font-size: 1.7em;
  font-weight: 400;
  color: rgb(var(--v-theme-baseVariant));
}

.category-page-title .category-emphasis {
  font-weight: 500;
  color: rgb(var(--v-theme-primary));
}
</style>