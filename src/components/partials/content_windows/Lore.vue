<script setup>
import Window from '@/components/partials/Window.vue'
</script>

<script>


import MarkdownIt from "markdown-it";
export default {
  data() {
    return {
      md_content : '',
    };
  },
  computed: {
    getRenderedMarkdown() {
      const md = new MarkdownIt();

      fetch('/~khimayan/lore/ackow.txt')
          .then(response => response.text())
          .then(text => this.md_content = text);

      return md.render(this.md_content);
    }
  },
}

</script>

<template>


  <Window title="Ackow 'Ack' Loriage" minimize_btn help_btn help_popup="Bonjour, je suis Alexo, l'ordinateur
  de bord du vaisseau du capitaine Ackow_. Je vous conseille d'essayer le bouton Start pour voir
  d'autres options que celles de la barre des tâches. 🙂">

    <div class="Markdown-Format" v-html="getRenderedMarkdown"> </div>

  </Window>

</template>

<style scoped>

</style>