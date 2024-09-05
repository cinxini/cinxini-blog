<template>
  <div class="comments-container">
    <Giscus id="comments" :repo="appConfig.giscus.repo" :repoId="appConfig.giscus.repoId"
      :category="appConfig.giscus.category" :categoryId="appConfig.giscus.categoryId"
      :mapping="appConfig.giscus.mapping" term="Welcome to @giscus/vue component!"
      :reactionsEnabled="appConfig.giscus.reactionsEnabled" :emitMetadata="appConfig.giscus.emitMetadata"
      :inputPosition="appConfig.giscus.inputPosition" :theme="appConfig.giscus.theme" :lang="appConfig.giscus.lang" />
  </div>
</template>

<script lang="ts" setup>
import Giscus from '@giscus/vue';
const appConfig = useAppConfig()
</script>
<style>
/* .color-box-border-info {
    border - color: red;
} */
#comments::part(iframe) {
  max-width: 640px;
  margin: auto;
  display: flex;
}

.comments-container {
  max-height: 640px;
  overflow-y: scroll;
}
</style>