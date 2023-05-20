<script setup>
import { ref, computed } from 'vue'
import Planning from './partials/content_windows/planning.vue'
import Blog from "./partials/content_windows/blog.vue";
import Lore from "@/components/partials/content_windows/lore.vue";
import NotFound from "@/components/partials/content_windows/NotFound.vue";

const routes = {
  '/': Lore,
  '/planning': Planning,
  '/blog': Blog,
  // '/about': About
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <component :is="currentView" />
</template>

<style scoped>

</style>