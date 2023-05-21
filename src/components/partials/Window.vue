<template>
  <div class="window">
    <div class="title-bar">
      <div class="title-bar-text">{{ title }}</div>
      <div class="title-bar-controls">
        <button aria-label="Help" @click="popup = !popup" v-if="help_btn"></button>
        <button aria-label="Minimize" v-if="minimize_btn"></button>
        <button aria-label="Restore" v-if="restore_btn"></button>
        <button aria-label="Close" v-if="close_btn"></button>
      </div>
    </div>
    <div class="window-body">
      <div id="help_popup" v-show="popup">
        {{ help_popup }}
      </div>
      <slot>
        This will only be displayed if there is no content to be distributed.
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popup: false
    };
  },
  name: "window",
  props: {
    title: String,
    help_btn: Boolean,
    minimize_btn: Boolean,
    restore_btn: Boolean,
    close_btn: Boolean,
    help_popup: String,
  }
}
</script>

<style scoped>
.title-bar-text {
  font-family: Tahoma, sans-serif;
}

.window {
  max-width: 95%;
  max-height: 95%;
  min-width: 50%;
  min-height: 30%;
  display: flex;
  flex-direction: column;
}

.window-body {
  position: relative;
  margin: 3px 6px;
}

#help_popup {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  border: 1px solid black;
  background-color: whitesmoke;
  padding: 3px 3px 3px;
  margin: 3px 3px 3px;
  font-size: medium;
  min-width: 80%;
  min-height: 80%;

}

</style>