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
  created() {
    this.getMarkdown();
  },
  computed: {
    getRenderedMarkdown(){
      const md = new MarkdownIt();
      return md.render(this.markdown.toString());
    }
  },
  methods: {
    getMarkdown() {
      const md_files = import.meta.glob('@/assets/blog_entry/*.md');

      var fetchPromises = [];
      var md_content = [];

      for (var item in md_files) {

        const fetchPromise = fetch(item)
            .then(response => response.text())
            .then(text => md_content.push(text))

        fetchPromises.push(fetchPromise);

      }

      Promise.all(fetchPromises)
          .then(() => {
            this.markdown = '';
            this.markdown = md_content.map(text => text + '  \n').join('');
          })
    },
  },
};

</script>

<template>
  <Window title="Blog" help_btn help_popup="">
    <div v-html="getRenderedMarkdown"> </div>
  </Window>
</template>

<style scoped>

</style>