<script setup>
import Window from '@/components/partials/Window.vue'
</script>

<script>
export default {
  name: "Home",
  data() {
    return {
      login: 'Ackow_',
      password: 'P1r@te',
    };
  },
  methods: {
    clickLogin() {
      if (this.login === 'Ackow_' && this.password === 'P1r@te') {
        this.$router.push('/lore')
      }
    },
  }
}
</script>

<template>
    <Window title="Ouverture de session">
      <div class="field-row">
        <label for="text">Nom d'utilisateur :</label>
        <input id="text" v-model="login" type="text"/>
      </div>
      <div class="field-row">
        <label for="text1">Mot de passe :</label>
        <input id="text1" v-model="password" type="password"/>
      </div>
      <div id="btn_login">
        <button class="btn_ok" @click="clickLogin">Login</button>
      </div>
    </Window>

</template>


<style scoped>
#btn_login, .field-row {
  padding-top: 10px;
  padding-left: 10px;
}

.btn_ok {
  margin-left: 20px;
  margin-right: 5px;
}

label {
  display: inline-block;
  width: 80px;
}
</style>