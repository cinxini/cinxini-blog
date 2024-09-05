<template>
  <v-card variant="flat">
    <v-card-title> Table of Contents
    </v-card-title>
    <v-list class="overflow-hidden mx-4 " variant="plain">
      <v-list-item class="toc-item py-1" :class="{ 'current': toc.id === currentId }" v-for="toc in tocs" width="250"
        density="compact" min-height="20">
        <v-list-item-title>
          <a class="toc-link" :href="`#${toc.id}`">
            {{ toc.label }}
          </a>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
const props = defineProps({
  tocs: Array,
  currentId: String
})
</script>

<style scoped>
.toc-item {
  background-color: rgba(var(--v-theme-secondaryContainer-lighten-1), 0.4);
  border-inline-start: 8px solid rgba(var(--v-theme-base), 0.1);
  padding: 1.25em 1.5em;
}

.toc-item.current {
  background-color: rgba(var(--v-theme-secondaryContainer-lighten-1), 0.4);
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