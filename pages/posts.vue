<template>
  <v-container class="w-50">
    <SectionTitle title="Recent Blog Posts" icon="fa-solid fa-quote-right" />

    <div class="d-flex flex-column ga-3">
      <v-card v-for="post in posts" :key="post._path">
        <v-card-title>
          <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
        </v-card-title>
        <v-card-text>{{ post.description }}</v-card-text>
      </v-card>
    </div>

  </v-container>
</template>

<script setup>
import SectionTitle from '@/components/display/SectionTitle.vue';

const { data: posts, refresh } = await useAsyncData('blogPostList', () => {
  return queryContent('/blog')
    .where({ draft: false })
    .sort({ 'dates.published': -1 })
    .find()
})
</script>

<style></style>