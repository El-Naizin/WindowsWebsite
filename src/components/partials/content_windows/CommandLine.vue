<script setup>
import Window from '@/components/partials/Window.vue'
</script>

<script>
export default {

  data() {
    return{
      userInput : "",
      showErrorMessage : false,
      showSuccesMessage : false,
      isInputEnable : true,
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

      if(this.showSuccesMessage)
        return;

      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }

      if(this.userInput == "Ackow"){
        this.showSuccesMessage = true;
        this.isInputEnable = false;
        this.showErrorMessage = false;
        return;
      }

      this.showErrorMessage = true;

      this.timeoutId = setTimeout(() => {
        this.showErrorMessage = false;
      }, 3000);

      this.userInput = "";
    },
  }
};
</script>

<template>
  <Window @click="focusInput" class="Window" title="Terminal" minimize_btn  help_popup="" @keydown.enter="checkInput">
    <div class="window-body" >
      <pre>Microsoft&#10094;R&#10095; Windows DOS
  &#10094;C&#10095; Copyright Microsoft Corp 1990-2001.
          <br></pre>

      <div class="inputWrapper">
        <pre>C:&#92;WINDOWS&#92;SYSTEM32></pre><input v-if="isInputEnable" class="inputUser" type="text" ref="inputRef" v-model="userInput">
      </div>
      <pre><p v-if="showErrorMessage">Wrong Password</p></pre>
      <pre v-if="showSuccesMessage"><p>
Félicitations !
Vous avez résolu l'énigme d'Ackow avec brio.
Pour poursuivre votre progression "".
Nous vous invitons à envoyer un email à l'adresse suivante :</p>
<a href="mailto:Ackow@protonmail.com">Ackow@protonmail.com</a>
      </pre>
    </div>
  </Window>
</template>

<style scoped>

.inputUser {
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

.Window{
  background-color: black;
  display: flex;

  overflow: hidden;
}

.inputWrapper{
  display: flex;
  align-items: center;
}

.window-body{
  width: 100vh;
  height: 100%;
}
</style>