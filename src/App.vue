<script setup>
import FooterItem from './components/partials/footer.vue'

import { ref, computed } from 'vue'
import BasicWindow from './components/partials/basic_window.vue'
import Planning from './components/partials/planning.vue'

const routes = {
  '/': BasicWindow,
  '/planning': Planning,
  // '/about': About
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || BasicWindow
})
</script>

<template>
<!--
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>

    <TheWelcome />
    <q-icon name="cloud" />

  </main>
-->
  <component :is="currentView" />

  <div class="footer">
    <FooterItem>
    </FooterItem>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }


  header {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}



</style>
