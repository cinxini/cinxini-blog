<template>
  <MainContainer>
    <ArticleHeader :meta="meta" />
    <ArticleBody class="mt-6">
      <ContentDoc />
    </ArticleBody>
  </MainContainer>
</template>

<script setup>
import ArticleBody from '@/components/containers/ArticleBody.vue';
import ArticleHeader from '@/components/containers/ArticleHeader.vue';
import MainContainer from '@/components/containers/MainContaienr.vue';
import { useDate } from 'vuetify';

const date = useDate()
const { path } = useRoute();

const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
})

const meta = computed(() => {
  if (blogPost.value) {
    return {
      // pageType: blogPost.value.pageType,
      title: blogPost.value.title,
      author: blogPost.value.author,
      category: blogPost.value.category,
      date: date.format(blogPost.value.dates.published, 'fullDate'),
      description: blogPost.value.description,
      tags: blogPost.value.tags,
      cover: blogPost.value.cover ? blogPost.value.cover : `/images/blog/default-cover.png`
      // github: blogPost.value.github ? blogPost.value.github : null
    }
  } else {
    return null;
  }
})
console.log(meta.value)
</script>

<style scoped></style>
