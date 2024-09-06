<template>
  <MainContainer>
    <div class="category-page-title d-flex flex-row ga-2 align-center">
      <v-icon icon="fa-solid fa-circle-question" color="baseVariant" size="small"></v-icon>
      <div>Posts
        with <span class="category-emphasis">{{ category }}</span> category</div>
    </div>
    <!-- <DotLoader /> -->
    <!-- <ContentList :articles="posts" class="mt-10" /> -->
    <QueryContentList :query="query" :fromPage="`/blog/category/${category}`" :page="page" />

  </MainContainer>
</template>

<script setup>
import MainContainer from '@/components/containers/MainContaienr.vue';
import QueryContentList from '@/components/containers/QeuryContetListSection.vue';
// import DotLoader from '@/components/display/DotLoader.vue';

const route = useRoute()
const category = ref(route.params ? route.params.slug[0] : null);
console.log('/blog/category/[...slug].vue ::', route, route.params.slug)

const page = computed(() => {
  if (route.params.slug && route.params.slug.length > 1) {
    return Number(route.params.slug[2]);
  } else {
    return 1;
  }
})
console.log(`I am on page #${page.value} of category::${category.value}`)

const query = computed(() => {
  const newQuery = { draft: false }
  if (category.value) {
    newQuery.category = category.value
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