<script setup>
import {computed, ref} from 'vue'
import Planning from '@/components/partials/content_windows/Planning.vue'
import Blog from "@/components/partials/content_windows/Blog.vue";
import Lore from "@/components/partials/content_windows/Lore.vue";
import Home from "@/components/partials/content_windows/Home.vue";
import NotFound from "@/components/partials/content_windows/NotFound.vue";

</script>

<template>
  <router-view></router-view>
</template>

<style scoped>

</style>