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
      <div class="d-flex flex-column pa-3">
        <div class="d-flex flex-row ga-1">
          <v-chip density="comfortable" rounded="sm" size="small" color="base">
            <v-icon icon="fa-solid fa-folder" start size="x-small"></v-icon>
            {{ content.category }}</v-chip>
          <v-chip variant="text" size="small" density="comfortable">
            <v-icon icon="fa-regular fa-calendar" size="x-small" color="base" start />
            {{ content.dates.published }}
          </v-chip>
        </div>
        <p class="text-h4">{{ content.title }}</p>
        <p class="text-body">{{ content.description }}</p>
        <div class="d-flex flex-row ga-1 align-center">
          <v-icon icon="fa-solid fa-tags" size="x-small" color="base" />
          <v-chip nuxt v-for="tag in content.tags" link size="small" density="compact" pill color="base" variant="tonal"
            :to="`/tag/${tag}`">
            {{ tag }}</v-chip>
        </div>

      </div>
    </div>
    <!-- <v-row no-gutters>
      <v-col style="background-color: aliceblue;" width="100">
        <v-img :src="coverImg" cover max-width="100" min-width="100">
          <template v-slot:error>
            <v-img class="mx-auto" max-width="100" min-width="100" :src="`/images/blog/default-cover.png`"></v-img>
          </template>
        </v-img>
      </v-col>
      <v-col class="d-flex flex-column pa-3">
        <div class="d-flex flex-row ga-1">
          <v-chip density="comfortable" rounded="sm" size="small" color="base">
            <v-icon icon="fa-solid fa-folder" start size="x-small"></v-icon>
            {{ content.category }}</v-chip>
          <v-chip variant="text" size="small" density="comfortable">
            <v-icon icon="fa-regular fa-calendar" size="x-small" color="base" start />
            {{ content.dates.published }}
          </v-chip>
        </div>
        <p class="text-h4">{{ content.title }}</p>
        <p class="text-body">{{ content.description }}</p>
        <div class="d-flex flex-row ga-1 align-center">
          <v-icon icon="fa-solid fa-tags" size="x-small" color="base" />
          <v-chip nuxt v-for="tag in content.tags" link size="small" density="compact" pill color="base" variant="tonal"
            :to="`/tag/${tag}`">
            {{ tag }}</v-chip>
        </div>

      </v-col>
    </v-row> -->
  </v-card>
</template>

<script setup>
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