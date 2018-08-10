<template lang="pug">
  .Dropdown(
    @click.stop
  )
    .Item.container(
      @click="show_sortBar"
    )
      .Icon.container.hv-center
        font-awesome-icon(icon="sort-amount-down")
      .Text.container.v-center
        |  排序
    .Theme.container.vertical
      .Text.container.v-center
        |  主题
      .Palette.container
        BaseBtn.Background-color(
          v-for="colorName in availableBackgroundNames"
          :key="colorName"
          :style="GLOBAL.styleLibrary[colorName]"
          @click="update_theme(colorName)"
        )
</template>

<script>
import BaseBtn from './BaseBtn--style1.vue'
export default {
  components: {
    BaseBtn
  },
  props: ['selectedTabIndex'],
  computed: {
    tab() {
      return this.GLOBAL.tabs[this.selectedTabIndex]
    },
    availableBackgroundNames() {
      return Object.keys(this.GLOBAL.styleLibrary)
    }
  },
  methods: {
    update_theme(newColorName) {
      this.GLOBAL.tabs[this.selectedTabIndex].themes.colorName = newColorName
    },
    show_sortBar(){
      this.tab.themes.hasSortBar = true
    }
  }
}
</script>


<style scoped>
.Dropdown {
  background: white;
  padding: 0.5rem;
}
.Item {
  height: var(--tab-height);
  background: white;
}
.Item:hover {
  background: var(--hover-background);
}
.Item .Icon {
  width: var(--icon-width);
}
.Theme {
  background: white;
}
.Theme .Text {
  height: var(--tab-height);
}
.Theme .Background-color {
  height: 3rem;
  width: 3rem;
  padding: 0.3rem;
  background-clip: content-box;
}
</style>
