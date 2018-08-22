<template lang="pug">
  div
    p (You can double click on an Item to turn it into a folder.)
    FileTreeItemLC(
      class="FileTreeItemLC"
      v-bind=`{
        model: treeData,
        currentPath}`
      v-on=`{
        update_path}`)
      template(slot="style-component" slot-scope="slotProps")
        TabSC(
          style="width:16rem"
          v-bind="slotProps")
          template(slot="tailer-icon")
            span(v-if='slotProps.isFolder')
             | [{{ slotProps.isOpen ? '-' : '+' }}]
            div(v-else)
</template>

<script>
/* eslint-disable */
// @ is an alias to /src
import FileTreeItemLC from './FileTreeItemLC'
import TabSC from './TabSC'

export default {
  name: 'AAA',
  components: {
    FileTreeItemLC,
    TabSC
  },
  computed: {
    treeData() {
      return this.$store.state.FileTree.treeData
    },
    currentPath() {
      return this.$store.state.FileTree.currentPath
    }
  },
  methods: {
    update_path(event) {
      console.log('AAA')
      this.$store.commit('UPDATE_PATH', event)
    }
  }
}
</script>

<style>
body {
  font-family: Menlo, Consolas, monospace;
  color: #444;
}
.FileTreeItemLC {
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
