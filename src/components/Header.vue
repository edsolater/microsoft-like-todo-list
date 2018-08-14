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
import Title from './Header__Title'
import SortBar from './Header__SortBar'

export default {
  components: {
    Title,
    SortBar
  },
  computed: {
    todos: vm => vm.$store.state.todos,
    tabs: vm => vm.$store.state.tabs,
    selectedIndex: vm => vm.$store.state.selectedIndex,
    currentTitle: vm => vm.tabs[vm.selectedIndex].title,
    isSortBarShowed: vm => vm.tabs[vm.selectedIndex].themes.hasSortBar,
    currentStyle: vm => {
      const currentColorName = vm.tabs[vm.selectedIndex].themes.colorName
      const colorObjectIndex = vm.$store.state.backgroundColors.map(colorObj => colorObj.colorName).indexOf(currentColorName)  // 此处应该使用数据库查找
      return vm.$store.state.backgroundColors[colorObjectIndex].style
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


