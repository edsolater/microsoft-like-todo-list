<template lang="pug">
  .Header.container.vertical(:style="currentStyle")
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
import Title from './Header__Title.vue'
import SortBar from './Header__SortBar.vue'

export default {
  components: {
    Title,
    SortBar,
  },
  props: {
    selectedTabIndex: Number,
  },
  data() {
    return {
      todos: this.GLOBAL.todos,
      tabs: this.GLOBAL.tabs,
    }
  },
  computed: {
    currentTitle() {
      return this.tabs[this.selectedTabIndex].title
    },
    isSortBarShowed() {
      return this.tabs[this.selectedTabIndex].themes.hasSortBar
    },
    currentStyle() {
      const currentColorName = this.tabs[this.selectedTabIndex].themes.colorName
      return this.GLOBAL.styleLibrary[currentColorName]
    },
  },
  methods: {
    toggle_hasSortBar() {
      this.GLOBAL.tabs[this.selectedTabIndex].themes.hasSortBar = !this.GLOBAL
        .tabs[this.selectedTabIndex].themes.hasSortBar // 调用setter，所以有效！
    },
  },
}
</script>


<style scoped>
.Header {
  justify-content: flex-end;
}
.Title {
  margin-bottom: 10px;
}
.SortBar {
  background: rgba(0, 0, 0, 0.1);
  height: calc(var(--tab-height) * 0.8);
}
</style>


