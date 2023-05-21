<script>
export default {
  data() {
    return {
      showStartMenu: false
    };
  },
  methods: {
    toggleShow() {
      this.showStartMenu = true;
      this.$nextTick(() => {
        this.$refs.StartMenuRef.focus();
      })
    },
    async handleFocusOut() {
      await new Promise(resolve => setTimeout(resolve, 100));
      this.showStartMenu = false;
    }
  }
};
</script>

<template>
  <div class="window"
       id="start_menu"
       v-show="showStartMenu"
       ref="StartMenuRef"
       @focusout="handleFocusOut"
       tabindex="0"
  >
    <div class="q-pa-md-none" style="max-width: 350px">
      <div class="title-bar" style="min-height: 10vh">
        <q-item>
          <q-item-section avatar>
            <q-avatar square>
              <img id="Ackow_PP" src="src/assets/startMenu/Ackow_PP.png">
            </q-avatar>
          </q-item-section>

          <q-item-section id="Ackow">Ackow</q-item-section>
        </q-item>
      </div>
      <q-separator id="Start_menu_separator" />

      <q-list bordered class="row">
          <div class="col-7">
            <q-item v-ripple href="https://www.twitch.tv/ackow_" target="_blank">
              <q-item-section avatar>
                <q-avatar square>
                  <img src="src/assets/startMenu/twitch.png">
                </q-avatar>
              </q-item-section>
              <q-item-section>Twitch</q-item-section>
            </q-item>

            <q-separator/>

            <q-item v-ripple href="https://twitter.com/Ackowlarie" target="_blank">
              <q-item-section avatar>
                <q-avatar square>
                  <img src="src/assets/startMenu/twitter.png">
                </q-avatar>
              </q-item-section>
              <q-item-section>Twitter</q-item-section>
            </q-item>
          </div>

          <q-separator id="vertical_separator" vertical color="light-blue-2"/>

          <div id="side_panel" class="col">
            <q-item v-ripple href="https://www.twitch.tv/ackow_" target="_blank">
              <q-item-section avatar>
                <q-avatar square>
                  <img src="src/assets/startMenu/twitch.png">
                </q-avatar>
              </q-item-section>
              <q-item-section>Twitch</q-item-section>
            </q-item>

            <q-separator/>

            <q-item v-ripple href="https://twitter.com/Ackowlarie" target="_blank">
              <q-item-section avatar>
                <q-avatar square>
                  <img src="src/assets/startMenu/twitter.png">
                </q-avatar>
              </q-item-section>
              <q-item-section>Twitter</q-item-section>
            </q-item>
          </div>
        </q-list>
    </div>
  </div>
</template>

<style scoped>
#start_menu {
  position: fixed;
  bottom: 0%;
  left: 0%;
  background-color: white;
  margin-top: 0;
  margin-bottom: 30px;
}

.q-pa-md-none {
  min-width: 50vh;
  min-height: 50vh;
}

#Ackow {
  color: white;
  font-size: large;
  font-family: Tahoma, sans-serif;
}

#Ackow_PP {
  border: 2px solid white;
  border-radius: 4px;
}

#vertical_separator {
  width: 0.25vh;
}
</style>