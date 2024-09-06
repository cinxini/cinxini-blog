<template>
  <MainContainer>
    <SectionTitle title="About Me" icon="fa-regular fa-face-grin-wink" />

    <div class="d-flex flex-column align-center ga-1 my-8">
      <!-- avatar image -->
      <v-hover v-slot="{ isHovering, props }">
        <v-avatar size="110" class="mb-3 avatar" v-bind="props" :class="`elevation-${isHovering ? 5 : 2}`"
          variant="elevated">
          <img src="@/assets/images/avatar.png" alt="my avatar image" />
        </v-avatar>
      </v-hover>

      <!-- Name & Short Bio -->
      <div>
        <div class="text-h6 text-primary font-weight-bold text-center">{{ aboutMe.name }}</div>
        <div class="text-caption text-grey font-weight-medium my-1 text-center mt-0">{{ aboutMe.shortBio }}</div>
      </div>
      <p class="d-flex flex-row ga-3 my-3">
        <v-btn v-if="aboutMe.social.medium" class="social__bttn" icon="fa-brands fa-medium" size="small"
          :href="aboutMe.social.medium" target="_blank" />
        <v-btn v-if="aboutMe.social.linkedin" class="social__bttn" icon="fa-brands fa-linkedin-in" size="small"
          :href="aboutMe.social.linkedin" target="_blank" />
        <v-btn v-if="aboutMe.social.x" class="social__bttn" icon="fa-brands fa-x-twitter" size="small"
          :href="aboutMe.social.x" target="_blank" />
        <v-btn v-if="aboutMe.social.github" class="social__bttn" icon="fa-brands fa-github-alt" size="small"
          :href="aboutMe.social.github" target="_blank" />
        <v-btn v-if="aboutMe.social.kaggle" class="social__bttn" icon="fa-brands fa-kaggle" size="small"
          :href="aboutMe.social.kaggle" target="_blank" />
      </p>
      <div style="height: 30px;">
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <v-btn nuxt v-bind="props" variant="tonal" :color="isHovering ? 'primary' : 'base'" class="mybutton"
              density="comfortable" @click="isOpenned = !isOpenned">
              {{ isOpenned ? "Hide" : "More About Me" }}
            </v-btn>
          </template>
        </v-hover>
      </div>
    </div>

    <div v-if="isOpenned">
      <ArticleBody class="poppins my-4 main-background">
        <ContentDoc path="/about" />
      </ArticleBody>
    </div>

    <v-timeline align="start" class="mb-10">
      <v-timeline-item v-for="item, i in workItems" :key="item.title" :size="item.current ? 'small' : 'x-small'"
        dot-color="base-lighten-2" fill-dot>
        <template v-slot:opposite>
          <div class="timeline-item-year" :class="{ 'pt-1': item.current }">{{ item.start }}</div>
        </template>
        <div>
          <h2 class="mt-n1 mb-2 timeline-item-header">
            {{ item.title }}
          </h2>
          <div class="timeline-item-description">
            {{ item.description }}
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </MainContainer>
</template>

<script setup>
import ArticleBody from '@/components/containers/ArticleBody.vue';
import MainContainer from '@/components/containers/MainContaienr.vue';
import SectionTitle from '@/components/display/SectionTitle.vue';

const { path } = useRoute()
const { data: aboutMe } = await useAsyncData(`aboutme`, () => {
  return queryContent().where({ _path: path }).findOne();
})

const isOpenned = ref(false);

const workItems = [
  {
    title: "Web Application Developer",
    description: "Backend: Flask running on EC2, Serverless with AWS Lambda & API Gateway. Front-end: Vanilla javascript, Vue, Nuxt, Vuetify.",
    start: '2024',
    current: true
  },
  {
    title: "MLOps Engineer",
    description: "Deployed ML models on AWS cloud with EC2 & Lambda.",
    start: '2023',
    current: false
  },
  {
    title: "Data Scientist",
    description: "Data cleaning & data analysis on weather data. Research & develop ML models.",
    start: '2019',
    current: false
  },
]
</script>

<style scoped>
.social__bttn {
  color: rgb(var(--v-theme-base));
}

.social__bttn:hover {
  color: rgb(var(--v-theme-primary));
}

/* timeline */

.timeline-item-year,
.timeline-item-header {
  color: rgb(var(--v-theme-primary));
  font-weight: 500;
  line-height: 1.5;
  font-size: 1rem;
  letter-spacing: 0.06em !important;
}

.timeline-item-year {
  color: rgb(var(--v-theme-base));
  letter-spacing: 0.08em !important;
}

.timeline-item-description {
  font-size: 0.8rem !important;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.0333333333em !important;
  color: rgb(var(--v-theme-base))
}
</style>