<script setup>
import Window from '../Window.vue'
</script>

<script>
import MarkdownIt from 'markdown-it';

export default {
  data() {
    return {
      markdown: '# Hello, World!'
    };
  },
  computed: {
    renderedMarkdown() {
      const md = new MarkdownIt();
      return md.render(this.markdown);
    }
  }
};


</script>

<template>
  <Window title="Blog" help_btn help_popup="">
    <div v-html="renderedMarkdown"></div>
  </Window>
</template>

<style scoped>

</style>