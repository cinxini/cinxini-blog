<template>

  <v-layout>
    <v-navigation-drawer location="end" app floating width="250"
      style="padding-top: 50px; position:fixed; top:0; right:0; overflow-y: auto;  z-index: 1005;" variant="plain">
      <div style="width:250px; padding-top: 30px;">
        <Toc :tocs="tocs" :currentId="intersectedTocId" />
      </div>
    </v-navigation-drawer>
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

            <Toc :tocs="tocs" :currentId="intersectedTocId" />
          </v-menu>

          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-btn nuxt v-bind="props" icon="fa-solid fa-comment" variant="plain" density="comfortable"
                :color="isHovering ? 'primary' : 'base'" :to="`#comment-section`">
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
                  <v-btn v-bind="props" icon="fa-brands fa-x-twitter" variant="plain"
                    :color="isHovering ? 'primary' : 'base'" style=""
                    :href="`https://x.com/intent/post?url=${currentHref}`" target="_blank">
                  </v-btn>
                </template>
              </v-hover>
              <v-hover>
                <template v-slot:default="{ isHovering, props }">
                  <v-btn v-bind="props" icon="fa-brands fa-linkedin-in" variant="plain"
                    :color="isHovering ? 'primary' : 'base'" style=""
                    :href="`https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&shareUrl=${currentHref}`"
                    target="_blank">
                  </v-btn>
                </template>
              </v-hover>
            </v-card>
          </v-menu>
        </v-card>
        <ArticleBody class="mt-6">
          <ContentDoc />
        </ArticleBody>
        <v-divider class="border-opacity-25" color="base"></v-divider>
        <a id="comment-section"></a>
        <GiscusComment class="" style="margin-top: 50px; margin-bottom: 90px;" />
      </div>
    </MainContainer>
  </v-layout>
</template>

<script setup>
import ArticleBody from '@/components/containers/ArticleBody.vue';
import ArticleHeader from '@/components/containers/ArticleHeader.vue';
import GiscusComment from '@/components/containers/GiscusComment.vue';
import MainContainer from '@/components/containers/MainContaienr.vue';

import Toc from '@/components/containers/Toc.vue';
import { computed, watch } from 'vue';
import { useDate } from 'vuetify';

const date = useDate()
const { path } = useRoute();
const viewport = useViewport()
const appConfig = useAppConfig()
const { currentRoute } = useRouter();

const currentHref = computed(() => {
  return `${appConfig.baseUrl}${currentRoute.value.fullPath}`
})

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
    links.push(newLink);
  })
  return links;
})

const bottomNavActive = computed(() => {
  return viewport.isLessThan('desktopMedium') ? true : false;
})

const intersectedTocId = ref(null);
const observer = ref(null)

// hooks
onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id')
      if (entry.isIntersecting) {
        intersectedTocId.value = id
      }

    })
  }, {
    threshold: appConfig.intersectObsThreshold
  })

  document.querySelectorAll(appConfig.intersectObsIds).forEach((section) => {
    observer.value?.observe(section)
  })
})

onUnmounted(() => {
  observer.value?.disconnect()
})


</script>
