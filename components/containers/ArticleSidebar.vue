<template>
  <v-navigation-drawer location="end" app floating width="250" :temporary="temporary"
    style="padding-top: 50px; position:fixed; top:0; right:0; overflow-y: auto;  z-index: 1005;" variant="plain">
    <div style="width:250px; padding-top: 30px;">
      <Toc :tocs="tocs" :currentId="tocs[0].id" />
      <!-- <v-card variant="flat">
        <v-card-title> Table of Contents
        </v-card-title>
        <v-list class="overflow-hidden mx-4 " variant="plain">
          <v-list-item class="toc-item py-1" :class="{ 'current': toc.id === 'h2-title' }" v-for="toc in tocs"
            width="250" density="compact" min-height="20">
            <v-list-item-title>
              <a class="toc-link" :href="`#${toc.id}`">
                {{ toc.label }}
              </a>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card> -->
    </div>
  </v-navigation-drawer>
</template>

<script setup>
import Toc from '@/components/containers/Toc.vue';
const props = defineProps({
  tocs: Array,
  temporary: Boolean,

});


</script>

<style scoped></style>