<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>

    <div>
      <q-btn @click="onClick">Click me</q-btn>
    </div>

  <q-layout view="lHh Lpr lFf">
    <q-drawer show-if-above v-model="drawerOpen" side="left">
      <q-list bordered>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="bluetooth" />
          </q-item-section>

          <q-item-section>Icon as avatar</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar color="teal" text-color="white" icon="bluetooth" />
          </q-item-section>

          <q-item-section>Avatar-type icon</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar rounded color="purple" text-color="white" icon="bluetooth" />
          </q-item-section>

          <q-item-section>Rounded avatar-type icon</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white">
              R
            </q-avatar>
          </q-item-section>

          <q-item-section>Letter avatar-type</q-item-section>
        </q-item>

        <q-separator />

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>
          <q-item-section>Image avatar</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar square>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>
          <q-item-section>Image square avatar</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar rounded>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>
          <q-item-section>Image rounded avatar</q-item-section>
        </q-item>

        <q-separator />

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar rounded>
              <img src="https://cdn.quasar.dev/img/mountains.jpg">
            </q-avatar>
          </q-item-section>
          <q-item-section>List item</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section thumbnail>
            <img src="https://cdn.quasar.dev/img/mountains.jpg">
          </q-item-section>
          <q-item-section>List item</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <!-- Page content here -->
    </q-page-container>
  </q-layout>

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
