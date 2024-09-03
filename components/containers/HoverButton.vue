<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-btn nuxt v-bind="props" variant="tonal" :color="isHovering ? 'primary' : 'base'" class="mybutton"
        density="comfortable" :width="width" :to="to">
        {{ title }}
      </v-btn>
    </template>
  </v-hover>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Button'
  },
  to: {
    type: String,
    default: '/'
  },
  width: {
    type: Number,
    default: 150
  }

});
</script>

<style></style>