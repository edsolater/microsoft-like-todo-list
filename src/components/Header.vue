<template lang="pug">
  .vertical-container.Header
    .info Header
    .container.align-items-end.justify-content-between
      Title.Title(
        :currentTitle="currentTitle"
      )
      Btngroup.Btngroup(
        :selectedTabID="selectedTabID"
      )
    SortBar.SortBar(
      v-if="isSortBarShowed"
      :currentTitle="currentTitle"
    )
</template>

<script>
import Title from "./Header__Title";
import Btngroup from "./Header__Btngroup";
import SortBar from "./Header__SortBar";

export default {
  components: {
    Title,
    Btngroup,
    SortBar
  },
  props: ['selectedTabID'],
  data() {
    return {
      todos: this.GLOBAL.todos,
      tabs: this.GLOBAL.tabs
    };
  },
  computed: {
    currentTitle(){return this.tabs[this.selectedTabID].title},
    isSortBarShowed(){return [0, 2].includes(this.tabs[this.selectedTabID].id)}
  }
};
</script>


<style scoped>
.Header {
  background: linear-gradient(to right, mediumslateblue, dodgerblue);
}
.SortBar {
  height: 1.5rem;
}
</style>


