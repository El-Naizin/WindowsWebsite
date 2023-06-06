<script setup>
import Window from '@/components/partials/Window.vue'
</script>

<script>
export default {

  data() {
    return{
      userInput : "",
      showMessage : false,
      timeoutId: null,
    }
  },

  mounted() {
    this.$refs.inputRef.focus();
  },
  methods: {
    focusInput() {
      this.$refs.inputRef.focus();
    },
    checkInput() {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }

      this.showMessage = true;

      this.timeoutId = setTimeout(() => {
        this.showMessage = false;
      }, 3000);

      this.userInput = "";
    },
  }
};
</script>

<template>
  <Window @click="focusInput" class="Window" title="Terminal" help_btn help_popup="" @keydown.enter="checkInput">
    <div class="window-body" >
      <pre>Microsoft&#10094;R&#10095; Windows DOS
  &#10094;C&#10095; Copyright Microsoft Corp 1990-2001.
          <br></pre>

      <div class="inputWrapper">
        <pre>C:&#92;WINDOWS&#92;SYSTEM32></pre><input class="inputUser" type="text" ref="inputRef" v-model="userInput">
      </div>
      <pre><p v-if="showMessage">Wrong Password</p></pre>
    </div>
  </Window>
</template>

<style scoped>

.Window{
  background-color: black;
  display: flex;

  overflow: hidden;
}

.inputWrapper{
  display: flex;
  align-items: center;
}

.inputUser{
  border: none;
  width: 100%;
  display: block;
  padding: 12px 8px;
  background-color: black;
  color: #c0c0c0;
  font-family: "Perfect DOS VGA 437 Win";
  font-size: 1rem;
  margin: 0;
  * {
    font-family: "Perfect DOS VGA 437 Win";
  }
}

.window-body{
  width: 100vh;
  height: 100%;
}
</style>