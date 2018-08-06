<template lang="pug">
  .container.flex-column.Header
   
    .container.head-title.px-3
      Title.Title(
        :currentTitle="currentTitle"
      )
      Btngroup.Btngroup(
        :selectedTabIndex="selectedTabIndex"
      )
    BarSort.tab-height.BarSort(
      v-if="isBarSortShowed"
      :currentTitle="currentTitle"
      @toggle:hasBarSort="toggle_hasBarSort"
    )
</template>

<script>
import Title from "./Header__Title";
import Btngroup from "./Header__Btngroup";
import BarSort from "./Header__BarSort";

export default {
  components: {
    Title,
    Btngroup,
    BarSort
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
    isBarSortShowed() {
      return this.tabs[this.selectedTabIndex].themes.hasBarSort;
    }
  },
  methods: {
    toggle_hasBarSort() {
      /*FIXME: 机制重要！！！*/
      const memory = this.GLOBAL.tabs[this.selectedTabIndex].themes;
      const targetProperty = "hasBarSort";
      if (memory[targetProperty] === true) {
        this.$set(memory, targetProperty, false);
      } else {
        this.$set(memory, targetProperty, true);
      }
      // this.$set(this.GLOBAL.tabs[this.selectedTabIndex].themes, "hasBarSort", false)
    }
  }
};
</script>


<style scoped>
.Header {
  background: linear-gradient(to right, mediumslateblue, dodgerblue);
}
.head-title {
  margin-top: 80px;
  justify-content: space-between;
  align-items: flex-end;
}
.BarSort {
  background: rgba(0, 0, 0, 0.1);
}
</style>


