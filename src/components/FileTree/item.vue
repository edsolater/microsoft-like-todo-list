<template lang="pug">
  li
    div(:class='{bold: isFolder}'
      @click='toggle'
      @dblclick='changeType')
      BaseTab(style="width:16rem;"
        :title='model.name'
        :isopen="isopen"
        :iscurrent="iscurrent")
        template(slot="tailer-icon")
          span(v-if='isFolder') [{{ isopen ? '-' : '+' }}]
          div(v-else)
    ul(v-show='isopen', v-if='isFolder')
      item.item(v-for='(newModel, index) in model.children'
        :key='index'
        :model='newModel'
        :currentPath="currentPath")
      li.add(@click='addChild') +
</template>

<script>
/* eslint-disable */
import BaseTab from "./BaseTab";
export default {
  name: "item",
  components: {
    BaseTab
  },
  props: {
    model: Object,
    currentPath: String
  },
  data: function() {
    return {
      isopen: false
    };
  },
  computed: {
    isFolder: function() {
      return this.model.children && this.model.children.length;
    },
    iscurrent() {
      // FIXME:
      if (this.currentPath.includes(this.model.id)) return true;
      else return false
    }
  },
  methods: {
    toggle: function() {
      // FIXME:
      if (this.iscurrent === true) {
        this.$store.commit("UPDATE_PATH", {
          mode: "remove",
          id: this.model.id
        });
      } else if (this.iscurrent === false) {
        this.$store.commit("UPDATE_PATH", {
          mode: "add",
          id: this.model.id
        });
      }
      if (this.isFolder) {
        this.isopen = !this.isopen;
      }
      console.log(this.isopen);
      console.log(`current path: `, this.$store.state.FileTree.currentPath);
      console.log(this.$store.state.FileTree.currentPath.includes(this.model.id));
    },
    changeType: function() {
      if (!this.isFolder) {
        this.$set(this.model, "children", []);
        this.addChild();
        this.isopen = true;
      }
    },
    addChild: function() {
      this.model.children.push({
        name: "new stuff"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
