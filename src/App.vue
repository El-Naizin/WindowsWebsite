<script setup>
import FooterItem from './components/partials/Footer.vue'
import MainWindow from './components/MainWindow.vue';
import { useRoute } from 'vue-router'
</script>

<script>
export default {
  last_bg: 'a.png',
  data() {
    return {
      images: ["a.png", "b.png", "c.png"],
    };
  },
  methods: {
    randomBackground() {

      //TODO: If this is /wallpapey
      // r, keep the last one, else take a random
      // return `/backgrounds/${this.images[Math.floor(Math.random() * this.images.length)]}`;
       return `/backgrounds/b.png`;
    },
  },
};
</script>

<template>
  <div id="main_wrapper" v-bind:style="{ backgroundImage: 'url(' + randomBackground() + ')' }">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <div id="main_window_wrapper">
      <MainWindow></MainWindow>
    </div>

    <div class="footer" v-if="useRoute().path !== '/'">
      <FooterItem>
      </FooterItem>
    </div>
  </div>
</template>

<style scoped>
#main_wrapper {
  width: 100%;
  height: 100%;

  background-size: cover;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}

#main_window_wrapper {
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer {
  flex: none;
  position: inherit;
  height: 32px;
  flex-grow: 0;
}
</style>
