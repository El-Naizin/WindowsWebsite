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
  }
}
</script>

<template>
  <tr>
    <th class="blog-entry-name"><img src="@/assets/footer/file.png">{{ entryName }}</th>
    <td class="blog-entry-date-added">{{ entryDateAdded }}</td>
    <td class="blog-entry-tags">{{ entryTags }}</td>
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

tr {
  background-color: #f8f8f8;
}

img {
  height: 1em;
  width: auto;
}

/*
tr:nth-of-type(odd) {
  background-color: #E6E6E6;
}
*/

td {
  padding: 0;
}
</style>