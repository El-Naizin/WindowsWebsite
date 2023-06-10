<template>
  <div class="window" ref="draggableContainer" :style="{zIndex : priority}">
    <div class="title-bar" @mousedown="dragMouseDown">
      <div class="title-bar-text">{{ title }}</div>
      <div class="title-bar-controls">
        <button aria-label="Help" @click="popup = !popup" v-if="help_btn"></button>
        <button aria-label="Minimize" @click="$router.push('/wallpaper')" v-if="minimize_btn"></button>
        <button aria-label="Restore" v-if="restore_btn"></button>
        <button aria-label="Close" @click="$router.push('/blog')" v-if="close_btn"></button>
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
      popup: false,

      priority: 0,

      positions: {
        clientX: undefined,
        clientY: undefined,
        movementX: 0,
        movementY: 0
      },
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
  },
  methods : {
    dragMouseDown: function (event) {

      // get the mouse cursor position at startup:
      this.positions.clientX = event.clientX
      this.positions.clientY = event.clientY
      this.priority = 2
      document.onmousemove = this.elementDrag
      document.onmouseup = this.closeDragElement
    },
    elementDrag: function (event) {
      event.preventDefault()
      this.positions.movementX = this.positions.clientX - event.clientX
      this.positions.movementY = this.positions.clientY - event.clientY
      this.positions.clientX = event.clientX
      this.positions.clientY = event.clientY
      // set the element's new position:
      this.$refs.draggableContainer.style.top = (this.$refs.draggableContainer.offsetTop - this.positions.movementY) + 'px'
      this.$refs.draggableContainer.style.left = (this.$refs.draggableContainer.offsetLeft - this.positions.movementX) + 'px'
    },
    closeDragElement () {
      document.onmouseup = null
      document.onmousemove = null
      this.priority = 0
    }
  }
}
</script>

<style scoped>
.title-bar-text {
  font-family: Tahoma, sans-serif;
  font-size: large;
}

.title-bar {
  min-height: 30px;
  z-index: 0;
}

.window {
  max-width: 95%;
  max-height: 95%;
  min-width: 50%;
  min-height: 30%;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 0;
}

.window-body {

  max-height: 800px;
  position: relative;
  margin: 3px 6px;
  font-size: medium;
  overflow: auto;
}

#help_popup {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  border: 1px solid black;
  background-color: whitesmoke;
  padding: 3px 3px 3px;
  margin: 3px 3px 3px;
  font-size: medium;
  min-width: 50%;
  min-height: 50%;
  max-width: 50%;

}

</style>