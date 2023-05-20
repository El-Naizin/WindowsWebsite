<script setup>
import Window from '@/components/partials/Window.vue'
</script>

<script>
import MarkdownIt from 'markdown-it';
import fs from "fs";
var jsonData = "";

export default {
  data() {
    return {
      markdown: '# Helo, World!'
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
    async getMarkdown() {

      jsonData = await fetch('/Markdown_Entries/index.json')
          .then(response => response.json())
          .then(json => jsonData = json);


      var fetchPromises = [];
      var md_content = [];

      for (var item in jsonData.Entries) {
        const fetchPromise =  fetch('/Markdown_Entries/' + jsonData.Entries[item].md_filename)
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