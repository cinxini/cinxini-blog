<template>
  <MainContainer>
    <div class="category-page-title d-flex flex-row ga-2 align-center">
      <v-icon icon="fa-solid fa-circle-question" color="baseVariant" size="small"></v-icon>
      <div>Posts in all tags.</div>
    </div>
    <QueryContentList :query="query" :fromPage="`/blog/tag`" :page="page" />

  </MainContainer>
</template>

<script setup>
import MainContainer from '@/components/containers/MainContaienr.vue';
import QueryContentList from '@/components/containers/QeuryContetListSection.vue';

const route = useRoute()
const tag = ref(route.params.slug ? route.params.slug[0] : null);
console.log('/blog/tag/index.vue ::', route, route.params.slug)

const page = computed(() => {
  if (route.params.slug && route.params.slug.length > 1) {
    console.log('slug > 1:::', route.params.slug)
    return Number(route.params.slug[1]);
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