<script setup>
import {computed, ref} from 'vue'
import Planning from '@/components/partials/content_windows/Planning.vue'
import Blog from "@/components/partials/content_windows/Blog.vue";
import Lore from "@/components/partials/content_windows/Lore.vue";
import Home from "@/components/partials/content_windows/Home.vue";
import NotFound from "@/components/partials/content_windows/NotFound.vue";

const routes = {
  '/': Lore,
  '/planning': Planning,
  '/blog': Blog,
  // '/about': About
  '/home': Home,
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