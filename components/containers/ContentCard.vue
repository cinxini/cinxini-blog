<template>
  <v-card :key="content._path">
    <div class="d-flex flex-row flex-nowrap">
      <div :style="{ 'max-width': coverImgWidth + 'px', 'min-width': coverImgWidth + 'px' }" class="position-static">
        <v-img class="position-absolute top-0" :src="coverImg" cover :max-width="coverImgWidth"
          :min-width="coverImgWidth">
          <template v-slot:error>
            <v-img class="mx-auto" :max-width="coverImgWidth" :min-width="coverImgWidth"
              :src="`/images/blog/default-cover.png`"></v-img>
          </template>
        </v-img>
      </div>
      <!-- Content Meta -->
      <div class="d-flex flex-column pa-3">
        <!-- Meta Top -->
        <MetaTop :category="content.category" :date="content.dates.published" />

        <!-- Meta Body -->
        <p>
          <NuxtLink class="meta-title" :to="content._path">{{ content.title }}</NuxtLink>
        </p>
        <p class="text-body-2 meta-description">
          {{ content.description }}
          <!-- {{ content.description.length > 200 ? content.description.slice(0, 250) + '...' : content.description }} -->
        </p>

        <!-- Meta Tags -->
        <MetaTags :tags="content.tags" />
      </div>
    </div>
  </v-card>
</template>

<script setup>
import { useResponsiveContainer } from '@/composables/display';
import { useDisplay } from 'vuetify';


import MetaTags from '@/components/containers/MetaTags.vue';
import MetaTop from '@/components/containers/MetaTop.vue';
const { name } = useDisplay()
const { coverImgWidth } = useResponsiveContainer(name);
const props = defineProps({
  content: {
    type: Object,
    required: true
  }
})

const coverImg = computed(() => {
  if (props.content.cover) {
    return props.content.cover;
  } else {
    return `/images/blog/default-cover.png`;
  }
})
</script>

<style scoped>
.meta-title {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.333;
  letter-spacing: normal;
  color: rgb(var(--v-theme-primary));
  font-family: "Poppins", sans-serif;

}

.meta-title:hover {
  text-decoration: underline solid rgba(var(--v-theme-primary), 0.2) 4px;
  color: rgba(var(--v-theme-primary), 0.8);
}


.meta-description {
  font-family: "Poppins", sans-serif;
  font-size: 0.875rem !important;
  font-weight: 400;
  line-height: 1.425;
  letter-spacing: 0.0178571429em !important;
}
</style>