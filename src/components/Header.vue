<template lang="pug">
  .Header.container.vertical(:style="currentStyle")
    Title.Title(
      :currentTitle="currentTitle"
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
    SortBar
  },
  data() {
    return {
      todos: this.$store.state.todos,
      tabs: this.$store.state.tabs
    }
  },
  computed: {
    selectedIndex() {
      return this.$store.state.selectedIndex
    },
    currentTitle() {
      return this.tabs[this.selectedIndex].title
    },
    isSortBarShowed() {
      return this.tabs[this.selectedIndex].themes.hasSortBar
    },
    currentStyle() {
      const currentColorName = this.tabs[this.selectedIndex].themes.colorName
      return this.$store.state.styleLibrary[currentColorName]
    }
  },
  methods: {
    toggle_hasSortBar() {
      this.$store.state.tabs[this.selectedIndex].themes.hasSortBar = !this
        .$store.state.tabs[this.selectedIndex].themes.hasSortBar // 调用setter，所以有效！
    }
  }
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


