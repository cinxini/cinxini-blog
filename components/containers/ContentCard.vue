<template>
  <v-card :key="content._path">
    <div class="d-flex flex-row flex-nowrap">
      <div style="max-width: 120px; min-width: 120px;" class="position-static">
        <v-img class="position-absolute top-0" :src="coverImg" cover max-width="120" min-width="120">
          <template v-slot:error>
            <v-img class="mx-auto" max-width="120" min-width="120" :src="`/images/blog/default-cover.png`"></v-img>
          </template>
        </v-img>
      </div>
      <!-- Content Meta -->
      <div class="d-flex flex-column pa-3">
        <!-- Meta Top -->
        <MetaTop :category="content.category" :date="content.dates.published" />

        <!-- Meta Body -->
        <p class="text-h4">{{ content.title }}</p>
        <p class="text-body">{{ content.description }}</p>

        <!-- Meta Tags -->
        <MetaTags :tags="content.tags" />
      </div>
    </div>
  </v-card>
</template>

<script setup>
import MetaTags from '@/components/containers/MetaTags.vue';
import MetaTop from '@/components/containers/MetaTop.vue';
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

<style></style>