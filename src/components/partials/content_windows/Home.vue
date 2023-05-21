<script setup>
import Window from '@/components/partials/Window.vue'
</script>

<template>
<Window title="Ouverture de session Windows">
  <div class="field-row">
    <label for="text21">Nom d'utilisateur :</label>
    <input id="text21" v-model="login" type="text" />
  </div>
  <div class="field-row">
    <label for="text21">Mot de passe :</label>
    <input id="text21" v-model="password" type="password" />
  </div>
  <div id="btn_login">
    <a href="#/" v-if="login==='Ackow_' && password==='P1r@te'">
      <button class="btn_ok">OK</button>
    </a>
    <button class="btn_ok" v-else>OK</button>
    <button class="btn_cancel" disabled>Annuler</button>
  </div>
</Window>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      login: 'Ackow_',
      password: 'P1r@te',
    };
  },
};
</script>

<style scoped>
#btn_login, .field-row {
  padding-top: 10px;
  padding-left: 10px;
}

.btn_ok {
  margin-left: 20px;
  margin-right: 5px;
}

.btn_cancel {
  margin-left: 5px;
  margin-right: 10px;
}

label {
  display: inline-block;
  width: 80px;
}
</style>