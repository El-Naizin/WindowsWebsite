<script setup>
import FooterItem from './components/partials/Footer.vue'
import MainWindow from './components/MainWindow.vue';
import { useRoute } from 'vue-router'
</script>

<script>
export default {
  data() {
    return {
      last_bg: 'a.png',
      images: ["a.png", "b.png", "c.png"],
    };
  },
  methods: {
    randomBackground() {
      if (useRoute().path !== '/') {
        return this.last_bg;
      }
      else {
        this.last_bg = `/backgrounds/${this.images[Math.floor(Math.random() * this.images.length)]}`;
        return this.last_bg;
      }
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

    <div class="footer" v-show="useRoute().path !== '/'">
      <FooterItem>
      </FooterItem>
    </div>
  </div>
</template>

<style scoped>
#main_wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  background-size: cover;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow-y: hidden;
  overflow-x: hidden;

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
