<!--This vue is to display an entry in the blog list-->
<script setup>
</script>

<script>
export default {
  data() {
    return {};
  },
  props: {
    entryName: String,
    entryTags: String,
    entryDateAdded: String,
    selectedEntry: String,
  },
  methods: {
    updateSelectedEntry(newEntry) {
      console.log('New entry: ' + newEntry)
      this.$emit('updateSelectedEntry', newEntry)
    },
    isSelectedClass() {
      if (this.entryName === this.selectedEntry) {
        return "entryselected"
      }
    }
  }
}
</script>

<template>
  <tr
      @click="updateSelectedEntry(this.entryName)" :class="{entryselected: this.entryName === this.selectedEntry}"
      @dblclick="this.$router.push(`/blog/${entryName}`)"
  >
    <th class="blog-entry-name">
      <img src="@/assets/footer/file.png">
      {{ entryName }}
    </th>
    <td class="blog-entry-date-added">
      {{ entryDateAdded }}
    </td>
    <td class="blog-entry-tags">
      {{ entryTags }}
    </td>
  </tr>
</template>

<style scoped>
.blog-entry {
  display: flex;
}

th {
  background-color: #f0f0f0;
  text-align: left;
}

.entryselected th {
  background-color: #e0e0e0;
}

tr {
  background-color: #f8f8f8;
  user-select: none;
  cursor: pointer;
}

.entryselected {
  background-color: #e0e0e0;
  border: 1px dashed #1D1D1D;
}


img {
  height: 1em;
  width: auto;
}

td {
  padding: 0;
}

</style>