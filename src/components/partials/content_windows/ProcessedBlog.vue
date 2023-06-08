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

       fetch('/Markdown_Entries/' + this.$route.params.entry + ".md")
          .then(response => response.text())
          .then(text => this.md_content = text);

      return md.render(this.md_content);
    }
  },
}

</script>

<template>
  <Window :title=$route.params.entry close_btn class="BlogWindow">
    <div class="reset-pre" v-html="getRenderedMarkdown"> </div>
  </Window>
</template>

<style scoped>
</style>