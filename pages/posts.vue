<template>
  <v-container id="main-content" :width="containerWidth">
    <SectionTitle title="Recent Blog Posts" icon="fa-solid fa-quote-right" />
    <ContentList :articles="posts" class="mt-10" />
    <v-pagination :length="numPages" v-model="currPage" next-icon="fa-solid fa-caret-right"
      prev-icon="fa-solid fa-caret-left" rounded="lg" color="base" active-color="primary"></v-pagination>
  </v-container>
</template>

<script setup>
import ContentList from '@/components/containers/ContentList.vue';
import SectionTitle from '@/components/display/SectionTitle.vue';
import { useResponsiveContainer } from '@/composables/display';
import { computed, ref, watch } from 'vue';
import { useDisplay } from 'vuetify';

const appConfig = useAppConfig()
const { name } = useDisplay()
const { width: containerWidth } = useResponsiveContainer(name);

const currPage = ref(1);

const { data: posts, refresh } = await useAsyncData('blogPostList', () => {
  return queryContent('/blog')
    .where({ draft: false })
    .sort({ 'dates.published': -1 })
    .skip((currPage.value - 1) * appConfig.maxPostPerPage)
    .limit(appConfig.maxPostPerPage)
    .find()
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

watch(currPage, (newPage) => {
  refresh();
})

</script>

<style></style>