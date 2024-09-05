<template>

  <v-layout>
    <v-navigation-drawer location="end" app floating width="250" :temporary="temporary"
      style="padding-top: 50px; position:fixed; top:0; right:0; overflow-y: auto;  z-index: 1005;" variant="plain">
      <div style="width:250px; padding-top: 30px;">
        <Toc :tocs="tocs" :currentId="tocs[0].id" />
      </div>
    </v-navigation-drawer>
    <!-- <ArticleSidebar :isOpened="toggleToc" :tocs="tocs" :temporary="bottomNavActive ? true : false" /> -->
    <MainContainer class="position-relative">
      <div class="position-relative">
        <ArticleHeader :meta="meta" />
        <v-card :class="{ 'flex-column': !bottomNavActive }" variant="flat"
          class="d-flex  ga-2 justify-center position-fixed pa-1"
          :style="{ left: bottomNavActive ? 0 : '15%', top: bottomNavActive ? undefined : '80px', bottom: bottomNavActive ? '0px' : undefined, width: bottomNavActive ? '100%' : undefined }">

          <v-menu v-if="bottomNavActive" location="top center">
            <template v-slot:activator="{ props: menuProps }">
              <v-hover>
                <template v-slot:default="{ isHovering, props }">
                  <v-btn nuxt v-bind="props, menuProps" icon="fa-solid fa-list" variant="plain" density="comfortable"
                    :color="isHovering ? 'primary' : 'base'" style="">
                  </v-btn>
                </template>
              </v-hover>
            </template>

            <Toc :tocs="tocs" :currentId="tocs[0].id" />
          </v-menu>

          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-btn nuxt v-bind="props" icon="fa-solid fa-comment" variant="plain" density="comfortable"
                :color="isHovering ? 'primary' : 'base'">
              </v-btn>
            </template>
          </v-hover>

          <v-menu :location="bottomNavActive ? 'top' : 'start'">
            <template v-slot:activator="{ props: menuProps }">
              <v-hover>
                <template v-slot:default="{ isHovering, props }">
                  <v-btn nuxt v-bind="props, menuProps" icon="fa-solid fa-share-nodes" variant="plain"
                    density="comfortable" :color="isHovering ? 'primary' : 'base'" style="">
                  </v-btn>
                </template>
              </v-hover>
            </template>

            <v-card class="d-flex flex-column" variant="flat" elevation="0">
              <v-hover>
                <template v-slot:default="{ isHovering, props }">
                  <v-btn nuxt v-bind="props" icon="fa-brands fa-x-twitter" variant="plain"
                    :color="isHovering ? 'primary' : 'base'" style="">
                  </v-btn>
                </template>
              </v-hover>
              <v-hover>
                <template v-slot:default="{ isHovering, props }">
                  <v-btn nuxt v-bind="props" icon="fa-brands fa-linkedin-in" variant="plain"
                    :color="isHovering ? 'primary' : 'base'" style="">
                  </v-btn>
                </template>
              </v-hover>
            </v-card>
          </v-menu>
        </v-card>

        <ArticleBody class="mt-6">
          <ContentDoc />
        </ArticleBody>
      </div>
    </MainContainer>



  </v-layout>


</template>

<script setup>
import ArticleBody from '@/components/containers/ArticleBody.vue';
import ArticleHeader from '@/components/containers/ArticleHeader.vue';
import MainContainer from '@/components/containers/MainContaienr.vue';
import Toc from '@/components/containers/Toc.vue';
import { computed } from 'vue';
import { useDate } from 'vuetify';
const date = useDate()
const { path } = useRoute();
const viewport = useViewport()

const toggleToc = ref(false)
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
  })
  return links;
})
console.log(tocs.value)

const bottomNavActive = computed(() => {
  return viewport.isLessThan('desktopMedium') ? true : false;
})

const SideNavActive = computed(() => {
  return viewport.isLessThan('desktopMedium') ? false : true;
})
</script>

<style scoped>
div.sticky-tools {
  position: sticky;
  left: 0;
  bottom: 20px;
  width: 100%;
  background-color: red;
  color: white;
  text-align: center;
}
</style>
