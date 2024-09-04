<script setup>
</script>

<template>
  <v-sheet>
    <div class="md-style">
      <slot />
    </div>
  </v-sheet>
</template>

<style lang="scss">
.md-style {
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  background-color: white;
}
</style>