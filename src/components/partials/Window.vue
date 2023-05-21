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

/* to overlay the help popup with the window */
.window-body {
  position: relative;
  margin: 0 3px 3px;
}

#help_popup {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  border-color: #3f8cf3;
  background-color: #3f8cf3;
}

</style>