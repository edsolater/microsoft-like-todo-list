<template lang="pug">
  .container.flex-column#Header
    Title.Title(
      :currentTitle="currentTitle"
      :selectedTabIndex="selectedTabIndex"
    )
    SortBar.SortBar(
      v-if="isSortBarShowed"
      :currentTitle="currentTitle"
      @toggle:hasSortBar="toggle_hasSortBar"
    )
</template>

<script>
import Title from "./Header__Title";
import SortBar from "./Header__SortBar";

export default {
  components: {
    Title,
    SortBar
  },
  props: ["selectedTabIndex"],
  data() {
    return {
      todos: this.GLOBAL.todos,
      tabs: this.GLOBAL.tabs
    };
  },
  computed: {
    currentTitle() {
      return this.tabs[this.selectedTabIndex].title;
    },
    isSortBarShowed() {
      return this.tabs[this.selectedTabIndex].themes.hasSortBar;
    }
  },
  methods: {
    toggle_hasSortBar() {
      /*FIXME: 机制重要！！！*/
      const memory = this.GLOBAL.tabs[this.selectedTabIndex].themes;
      const targetProperty = "hasSortBar";
      if (memory[targetProperty] === true) {
        this.$set(memory, targetProperty, false);
      } else {
        this.$set(memory, targetProperty, true);
      }
    }
  }
};
</script>


<style scoped>
#Header {
  background: linear-gradient(to right, mediumslateblue, dodgerblue);
  justify-content: flex-end;
}
.Title {
  margin-bottom: 10px;
}
.SortBar {
  background: rgba(0, 0, 0, 0.1);
  height:calc(var(--tab-height)*.8);
}
</style>


