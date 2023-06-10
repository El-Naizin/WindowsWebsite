<script setup>
import Window from '@/components/partials/Window.vue'
import BlogEntry from "@/components/partials/BlogEntry.vue";
</script>

<script>
import MarkdownIt from 'markdown-it';

let jsonData = {};

export default {
  data() {
    return {
      markdown_lists: "",
      items: "",
      selectedEntry: "None",
    };
  },
  created() {
    this.getMarkdownEntries();
  },
  computed: {
    getRenderedMarkdown() {
      const md = new MarkdownIt();
      return md.render(this.markdown.toString());
    }
  },
  methods: {
    async getMarkdown() {

      await fetch('/Markdown_Entries/index.json')
          .then(response => response.json())
          .then(json => jsonData = json);


      let fetchPromises = [];
      let md_content = [];

      for (let item in jsonData.Entries) {
        const fetchPromise = fetch('/Markdown_Entries/' + jsonData.Entries[item].md_filename)
            .then(response => response.text())
            .then(text => md_content.push(text))

        fetchPromises.push(fetchPromise);

      }

      Promise.all(fetchPromises)
          .then(() => {
            this.markdown_lists = '';
            this.markdown_lists = md_content.map(text => text + '  \n').join('');
          })
    },

    async getMarkdownEntries() {
      let markdownData = {};

      const fetchPromise = await fetch('/Markdown_Entries/index.json')
          .then(response => response.json())
          .then(json => markdownData = json);

      Promise.all([fetchPromise]).then(() => {
        this.items = markdownData.Entries;
      });
    },
  },
};

</script>

<template>
  <Window title="Blog" help_btn help_popup="" minimize_btn>
    <table>
      <thead>
      <tr class="files-header">
        <th scope="col" id="file-name-header">Nom</th>
        <th scope="col" id="file-date-header">Date d'ajout</th>
        <th scope="col" id="file-tags-header">Tags</th>
      </tr>
      </thead>
      <tbody>
<!--      TODO change background color to match the window-->
      <BlogEntry :entryName="item.md_filename"
                 :entryDateAdded="item.creation_date"
                 :entryTags="item.tags.join(' ')"
                 :selected-entry="selectedEntry"
                 @updateSelectedEntry="(newEntry) => this.selectedEntry = newEntry"
                 v-for="(item, index) in items"
                 ></BlogEntry>
      </tbody>
    </table>
  </Window>
</template>

<style scoped>

.files-header {
  border-bottom: 1px transparent;
}

#file-name-header {
  word-wrap: unset;
  max-width: 200px;
}

th {
  border-right: 1px solid rgba(208, 206, 191, 0.75);
  border-left: 1px solid rgba(255, 255, 255, 0.75);
  text-align: left;

  &:first-of-type {
    border-left: none;
  }

  &:last-of-type {
    border-right: none;
  }
}

table {
  width: 100%;
  max-width: 600px;
  border-spacing: 0;
  //border: solid 1px black;
  border-collapse: collapse;
}

</style>