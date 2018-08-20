<template>
  <div>
    <p>(You can double click on an item to turn it into a folder.)</p>
    <item
      class="item"
      :model="treeData"
      :currentPath="currentPath"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import item from "./item";

export default {
  name: "AAA",
  components: {
    item
  },
  computed: {
    treeData() {
      return this.$store.state.treeData;
    },
    currentPath() {
      return this.$store.state.currentPath;
    }
  }
};
</script>

<style>
body {
  font-family: Menlo, Consolas, monospace;
  color: #444;
}
.item {
  cursor: pointer;
  user-select: none;
}
.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}
</style>
