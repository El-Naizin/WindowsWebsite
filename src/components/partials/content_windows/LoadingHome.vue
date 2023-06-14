<script setup>
import Window from '@/components/partials/Window.vue'
</script>

<script>
export default {
  name: "LoadingHome",
  data() {
    return {
      login: 'Ackow_',
      password: 'P1r@te',
      progress_value: 0,
    };
  },
  methods: {
    loadingPage() {
      const endValue = 100;
      const duration = 1000; // milliseconds
      const interval = 100; // milliseconds (adjust as needed)

      const numSteps = Math.ceil(duration / interval);
      const stepSize = endValue / numSteps;

      const increaseValue = () => {
        this.progress_value += stepSize;

        if (this.progress_value < endValue) {
          setTimeout(increaseValue, interval);
        } else {
          this.$router.push('/lore')
        }
      };

      increaseValue();
    },
  },
  mounted() {
    this.loadingPage()
  }
}
</script>

<template>
  <Window title="Ouverture de session">
    <div class="field-row">
      <label for="text">Nom d'utilisateur :</label>
      <input id="text" v-model="login" type="text" readonly/>
    </div>
    <div class="field-row">
      <label for="text1">Mot de passe :</label>
      <input id="text1" v-model="password" type="password" readonly/>
    </div>
    <div>
      <progress max="100" :value="progress_value"></progress>
    </div>
  </Window>

</template>


<style scoped>
.field-row {
  padding-top: 10px;
  padding-left: 10px;
}

progress {
  margin-left: 30px;
  margin-right: 5px;
}

label {
  display: inline-block;
  width: 80px;
}
</style>