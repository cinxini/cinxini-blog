<template>
  <v-card :key="content._path">
    <div class="d-flex flex-row flex-nowrap">
      <div :style="{ 'max-width': coverImgWidth + 'px', 'min-width': coverImgWidth + 'px' }" class="position-static">
        <NuxtLink :to="content._path"><v-img class="position-absolute top-0" :src="coverImg" cover
            :max-width="coverImgWidth" :min-width="coverImgWidth">
            <template v-slot:error>
              <v-img class="mx-auto" :max-width="coverImgWidth" :min-width="coverImgWidth"
                :src="`/images/blog/default-cover.png`"></v-img>
            </template>
          </v-img></NuxtLink>
      </div>
      <!-- Content Meta -->
      <div class="d-flex flex-column pa-2 flex-fill">
        <!-- Meta Top -->
        <MetaTop :category="content.category" :date="content.dates.published" />

        <!-- Meta Body -->
        <p>
          <NuxtLink class="meta-title" :to="content._path">{{ content.title }}</NuxtLink>
        </p>
        <p v-if="showDescription" class="text-body-2 meta-description">
          {{ content.description.length > descriptionCharMax ? content.description.slice(0, descriptionCharMax) + '...' : content.description }}
        </p>

        <!-- Meta Tags -->
        <div class="d-flex flex-row justify-space-between">
          <MetaTags :tags="content.tags" />
          <HoverButton v-if="smAndUp" title="Read More" :to="content._path" />
        </div>

      </div>
    </div>
  </v-card>
</template>

<script setup>
import HoverButton from '@/components/containers/HoverButton.vue';
import { useResponsiveContainer } from '@/composables/display';
import { computed } from 'vue';
import { useDisplay } from 'vuetify';

import MetaTags from '@/components/containers/MetaTags.vue';
import MetaTop from '@/components/containers/MetaTop.vue';

const { name, smAndUp } = useDisplay()
const { coverImgWidth, descriptionCharMax } = useResponsiveContainer(name);

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

const showDescription = computed(() => {
  return descriptionCharMax.value > 0 ? true : false;
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