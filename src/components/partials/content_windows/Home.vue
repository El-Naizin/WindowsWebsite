<script setup>
import Window from '@/components/partials/Window.vue'
</script>

<template>
<Window title="Log On to Windows">
  <div class="field-row">
    <label for="text21">Nom d'utilisateur :</label>
    <input id="text21" value="Ackow_" type="text" />
  </div>
  <div class="field-row">
    <label for="text21">Mot de passe :</label>
    <input id="text21" value="P1r@te" type="password" />
  </div>
  <div id="btn_login">
    <a href="#/">
      <button class="btn_ok">OK</button>
    </a>
    <button class="btn_cancel" disabled>Annuler</button>
  </div>
</Window>
</template>

<script>
export default {
  name: "Home",
}
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