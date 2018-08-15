<template lang="pug">
  .Header.relative
    transition( 
        enter-active-class="animated  fadeIn"
        leave-active-class="animated  fadeOut"
      )
      img.backgroundColor(
        :style="currentStyle"
        :key="currentColorName"
      )
    transition( 
      enter-active-class="animated faster fadeIn"
      leave-active-class="animated faster fadeOut"
    )
      SortBar.SortBar(
        v-if="isSortBarShowed"
        @toggle:hasSortBar="$store.commit('TOGGLE_HASSORTBAR')"
      )
    transition( 
      enter-active-class="animated fast fadeIn"
      leave-active-class="animated fast fadeOut"
    )
      Title.Title(
        :currentTitle="currentTitle"
        :key="currentTitle"
      )
      //- 相似的两组 key 是确保他们切换是独一无二的
      
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
    isSortBarShowed: vm => vm.tabs[vm.selectedIndex].themes.hasSortBar,
    currentTitle: vm => vm.tabs[vm.selectedIndex].title,
    currentColorName: vm => vm.tabs[vm.selectedIndex].themes.colorName,
    currentStyle: vm => {
      const currentColorName = vm.tabs[vm.selectedIndex].themes.colorName
      const colorObjectIndex = vm.$store.state.backgroundColors.map(colorObj => colorObj.colorName).indexOf(currentColorName) // 此处应该使用数据库查找
      return vm.$store.state.backgroundColors[colorObjectIndex].style
    }
    // currentStyle: vm => {
    //   const currentColorName = vm.tabs[vm.selectedIndex].themes.colorName
    //   const colorObjectIndex = vm.$store.state.backgroundColors.map(colorObj => colorObj.colorName).indexOf(currentColorName)  // 此处应该使用数据库查找
    //   return vm.$store.state.backgroundColors[colorObjectIndex].style
    // }
  }
}
</script>


<style scoped>
.Header {
  justify-content: flex-end;
}
.backgroundColor {
  position: absolute;
  height: 100%;
  width: 100%;
}
.Title {
  margin-bottom: 10px;
  position: absolute;
  width: 100%;
  bottom: calc(var(--tab-height) * 0.8);
}
.SortBar {
  background: rgba(0, 0, 0, 0.1);
  height: calc(var(--tab-height) * 0.8);
  position: absolute;
  width: 100%;
  bottom: 0;
}
.title-enter,
.title-leave-to {
  opacity: 0.3;
}
.title-enter-active,
.title-leave-active {
  transition: opacity 0.5s;
}
</style>


