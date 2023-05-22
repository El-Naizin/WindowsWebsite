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

      <div id="logoff">
        <router-link to="">
            <q-item>
              <q-item-section id="logoff-text" @click="this.$router.push('/')">Se déconnecter</q-item-section>
            </q-item>
        </router-link>
      </div>
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

#logoff {
  position: fixed;
  bottom: 5%;
  left: 13.325%;

  font-size:11px;
  background:#000;
  padding:3px 2px 3px 3px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  font-family:Trebuchet MS;
  background:linear-gradient(100deg,#3f8cf3,#4892F7 8%,#14A5F0 40%,#06f 88%,#06f 93%,#19B9F3 95%,#1290E9 96%,lightblue);
  padding:3px 5px 3px 3px;
  border-top:1px solid #0831d9;
  border-left:1px solid #0831d9;
  /*border-bottom:1px solid #001ea0;*/
  /*border-bottom-left-radius:8px;*/
  border-top-left-radius:7px;
  font-size:13px;
  height:21px;
  min-height: 4vh;
  min-width: 5vh;
}

#logoff-text {
  color: white;
  font-size: small;
  font-family: Tahoma, sans-serif;
  text-align: right;
}

#Ackow_PP {
  border: 2px solid white;
  border-radius: 4px;
}

#vertical_separator {
  width: 0.25vh;
}
</style>