<template>
  <v-container id="main-content" :width="containerWidth">
    <SectionTitle title="Recent Blog Posts" icon="fa-solid fa-quote-right" />
    <ContentList :articles="posts" class="mt-10" />

  </v-container>
</template>

<script setup>
import ContentList from '@/components/containers/ContentList.vue';
import SectionTitle from '@/components/display/SectionTitle.vue';
import { useResponsiveContainer } from '@/composables/display';
import { useDisplay } from 'vuetify';

const { name } = useDisplay()
const { width: containerWidth } = useResponsiveContainer(name);

const { data: posts, refresh } = await useAsyncData('blogPostList', () => {
  return queryContent('/blog')
    .where({ draft: false })
    .sort({ 'dates.published': -1 })
    .find()
})
</script>

<style></style>