<template>
  <MainContainer>
    <MetaTop :category="meta.category" :date="meta.date" />
    <v-img class="" :src="meta.cover" cover max-width="140" min-width="140">
      <template v-slot:error>
        <v-img class="mx-auto" max-width="140" min-width="140" :src="`/images/blog/default-cover.png`"></v-img>
      </template>
    </v-img>
    <!-- Meta Body -->
    <p>
      <NuxtLink class="meta-title" :to="path">{{ meta.title }}</NuxtLink>
    </p>

    <MetaTags :tags="meta.tags"></MetaTags>
    <p class="meta-description my-5">
      {{ meta.description.slice(0, 1) }}{{ meta.description.slice(1) }}
    </p>
    <div class="mt-6">
      <ContentDoc />
    </div>
  </MainContainer>
</template>

<script setup>
import MainContainer from '@/components/containers/MainContaienr.vue';
import MetaTags from '@/components/containers/MetaTags.vue';
import MetaTop from '@/components/containers/MetaTop.vue';
import { useDate } from 'vuetify'

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

<style scoped>
.meta-description {
  font-family: "Poppins", sans-serif;
  font-size: 0.875rem !important;
  /* font-weight: 400; */
  /* line-height: 1.5;
  letter-spacing: 0.0178571429em !important; */
}

.meta-description::first-letter {
  text-transform: uppercase;
  initial-letter: 2;
  color: rgb(var(--v-theme-tertiary));
  font-weight: bold;
  margin-right: .75em;
}

/* .meta-description .first-letter {
  text-transform: uppercase;
  font-size: 1.8em;
  font-weight: 500;
  color: rgb(var(--v-theme-primary));
  padding-left: 20px;
  line-height: 70px;
  font-size: 35px;
} */
</style>
