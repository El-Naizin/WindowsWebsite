<script setup>
import Window from '@/components/partials/Window.vue'
</script>

<template>
  <Window title="Blog Entry" help_popup="euh, je sais pas">
    <div>
      Blog name: {{ $route.params.entry }}
    </div>
  </Window>
</template>

<style scoped>

</style>