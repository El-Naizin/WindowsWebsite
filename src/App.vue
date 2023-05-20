<script setup>
import FooterItem from './components/partials/Footer.vue'
import MainWindow from './components/MainWindow.vue';

</script>

<template>
  <!-- for responsive design -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <MainWindow></MainWindow>

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
