<template>
  <div class="window">
    <div class="title-bar">
      <div class="title-bar-text">{{title}}</div>
      <div class="title-bar-controls">
        <button aria-label="Help" v-if="help_btn"></button>
        <button aria-label="Minimize" v-if="minimize_btn"></button>
        <button aria-label="Restore" v-if="restore_btn"></button>
        <button aria-label="Close" v-if="close_btn"></button>
      </div>
    </div>
    <div class="window-body">
      <slot>
        This will only be displayed if there is no content to be distributed.
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "window",
  props: {
    title : String,
    help_btn : Boolean,
    minimize_btn : Boolean,
    restore_btn : Boolean,
    close_btn : Boolean,
  }
}
</script>

<style scoped>
.title-bar-text {
  font-family: Tahoma, sans-serif;
}
</style>