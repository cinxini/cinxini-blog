<template>
  <MainContainer>
    <SectionTitle
      title="Publications"
      icon="fa-solid fa-book"
    />
    <ArticleBody class="poppins my-4 main-background">
      <ContentDoc path="/publications" />
    </ArticleBody>
  </MainContainer>
</template>

<script setup>
import ArticleBody from '@/components/containers/ArticleBody.vue'
import MainContainer from '@/components/containers/MainContaienr.vue'
import SectionTitle from '@/components/display/SectionTitle.vue'
</script>

<style></style>
