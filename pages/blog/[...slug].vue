<template>
  <div>
    <v-layout>
      <MainContainer>
        <ArticleHeader :meta="meta" />
        <ArticleBody class="mt-6">
          <ContentDoc />
        </ArticleBody>
      </MainContainer>
      <v-bottom-navigation style="position:fixed; bottom:0;" :active="bottomNavActive" color="indigo">
        <v-btn>
          <v-icon>mdi-history</v-icon>

          Recents
        </v-btn>

        <v-btn>
          <v-icon>mdi-heart</v-icon>

          Favorites
        </v-btn>

        <v-btn>
          <v-icon>mdi-map-marker</v-icon>

          Nearby
        </v-btn>
      </v-bottom-navigation>
      <v-navigation-drawer location="right" :max-width="250" :width="250" permanent app
        style="position:fixed; top:0; right:0; overflow-y: auto; ">
        <div style="padding-top: 50px; width:250px;">

          <v-card variant="flat">
            <v-card-title> Table of Contents
            </v-card-title>
            <v-list class="overflow-hidden mx-4 " variant="plain">
              <v-list-item class="toc-item py-1" :class="{ 'current': toc.id === 'h2-title' }" v-for="toc in tocs"
                width="250" density="compact" min-height="20">
                <v-list-item-title>
                  <a class="toc-link" :href="`#${toc.id}`">
                    {{ toc.label }}
                  </a>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </div>
      </v-navigation-drawer>

    </v-layout>

  </div>
</template>

<script setup>
import ArticleBody from '@/components/containers/ArticleBody.vue';
import ArticleHeader from '@/components/containers/ArticleHeader.vue';
import MainContainer from '@/components/containers/MainContaienr.vue';
import { ref } from 'vue';
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
console.log(blogPost.value.body)

const linkDepthToHeadingLevel = (depth) => {
  return `h${depth}`
}

const createLinkItem = (link) => {
  const newLink = {
    id: link.id,
    level: linkDepthToHeadingLevel(link.depth),
    label: link.text
  };
  return newLink;
}

const tocs = computed(() => {
  const links = []
  blogPost.value.body.toc.links.forEach(link => {
    const newLink = createLinkItem(link);
    console.log(newLink)
    links.push(newLink);

    // // h3 children
    // if (link.children) {
    //   console.log('children', link.children)
    //   link.children.forEach(childLink => {
    //     const newChildLink = createLinkItem(childLink);
    //     links.push(newChildLink)
    //   })
    // }
  })
  return links;
})
console.log(tocs.value)

const bottomNavActive = ref(true)
</script>

<style scoped>
.toc-item {
  background-color: rgba(var(--v-theme-secondaryContainer-lighten-1), 0.4);
  border-inline-start: 8px solid rgba(var(--v-theme-base), 0.1);
  padding: 1.25em 1.5em;
}

.toc-item.current {
  background-color: rgba(var(--v-theme-secondaryContainer-lighten-1), 0.4);
  /* border-inline-start: 8px solid rgba(var(--v-theme-primary), 0.3); */
  border-inline-start-color: rgba(var(--v-theme-primary), 0.3);
}

.toc-item a.toc-link {
  color: rgb(var(--v-theme-baseVaraint));
  font-weight: 400;
  font-size: 0.8em;
}

.toc-item.current a.toc-link {
  color: rgb(var(--v-theme-primary));
  font-weight: 450;
}
</style>
