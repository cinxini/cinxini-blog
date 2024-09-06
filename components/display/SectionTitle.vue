<template>
  <div class="section-title d-flex flex-row ga-2 align-center">
    <v-icon v-if="icon !== ''" :icon="icon" color="baseVariant" size="small"></v-icon>
    <div>{{ title }}</div>
  </div>
  <!-- <div>
    <v-tooltip v-if="tooltip !== ''" :text="tooltip">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" class="section-title px-0" variant="text" color="baseVariant">
          <template v-if="icon !== ''" v-slot:prepend class="pr-1">
            <v-icon :icon="icon" size="x-small" />
          </template>
{{ title }}
</v-btn>
</template>
</v-tooltip>
<v-btn v-else class="section-title px-0" variant="text" color="baseVariant">
  <template v-if="icon !== ''" v-slot:prepend class="pr-1">
        <v-icon :icon="icon" size="x-small" />
      </template>
  {{ title }}
</v-btn>
</div> -->
</template>

<script setup>
const props = defineProps({
  tooltip: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: 'title'
  },
  icon: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
/* .section-title {
  font-size: 1.6em;
  font-weight: 550;
} */

.section-title {
  font-size: 1.7em;
  font-weight: 400;
  color: rgb(var(--v-theme-baseVariant));
}

.tag-page-title .tag-emphasis {
  font-weight: 500;
  color: rgb(var(--v-theme-primary));
}
</style>