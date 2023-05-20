<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import  from './components/navbar.vue'
</script>

<template>

    <div>
      <q-btn @click="onClick">Click me</q-btn>
    </div>

  <q-toolbar class="xp-style-bar">
    <q-btn flat dense v-ripple>
      File
    </q-btn>
    <q-btn flat dense v-ripple>
      Edit
    </q-btn>
    <q-btn flat dense v-ripple>
      View
    </q-btn>
    <q-btn flat dense v-ripple>
      Help
    </q-btn>
  </q-toolbar>

    <div>

    </div>

</template>

<script>
export default {
  data() {
    return {
      drawerOpen: open
    }
  }
}
</script>
