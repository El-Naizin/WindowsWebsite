<script setup>
import FooterItem from './components/partials/footer.vue'
import Window from './components/partials/window.vue'
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
  <div class="window">
    <Window title="FAT 128 LIFE" help_btn>
      <p>Mate moi ça, une fenêtre Windows XP quoi !</p>
      <p>Quoicoubeh eheh</p>
    </Window>
  </div>

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
