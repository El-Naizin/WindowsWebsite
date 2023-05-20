<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import FooterItem from './components/partials/footer.vue'
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
  <div>
    <fieldset>
      <fieldset>
        <legend>Quoicoubeh</legend>
        <div class="field-row">
          <input id="radio17" type="radio" name="fieldset-example2">
          <label for="radio17">Claire Saffitz</label>
        </div>
        <div class="field-row">
          <input id="radio18" type="radio" name="fieldset-example2">
          <label for="radio18">Brad Leone</label>
        </div>
        <div class="field-row">
          <input id="radio19" type="radio" name="fieldset-example2">
          <label for="radio19">Chris Morocco</label>
        </div>
        <div class="field-row">
          <input id="radio20" type="radio" name="fieldset-example2">
          <label for="radio20">Carla Lalli Music</label>
        </div>
      </fieldset>
      <fieldset>
        <legend>T'as les cramptés ?</legend>
        <button>Click me BRO</button>
      </fieldset>
    </fieldset>
  </div>

  <div class="window">
    <div class="title-bar">
      <div class="title-bar-text">FAT 128 LIFE</div>
      <div class="title-bar-controls">
        <button aria-label="Close"></button>
      </div>
    </div>
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

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}



</style>
