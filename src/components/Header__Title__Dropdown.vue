<template lang="pug">
  .Dropdown(
    @click.stop
  )
    .Item.container(
      @click="SHOW_STORBAR"
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
          :style="correspondingStyle(colorName)"
          @click="UPDATE_THEME(colorName)"
        )
</template>

<script>
import BaseBtn from './BaseBtn--style1'
export default {
  components: {
    BaseBtn,
  },
  computed: {
    availableBackgroundNames: vm=> vm.$store.state.backgroundColors.map(colorObj => colorObj.colorName)
  },
  methods: {
    UPDATE_THEME(newColorName) {
      this.$store.commit('UPDATE_THEME',{newColorName})
    },
    SHOW_STORBAR() {
      this.$store.commit('SHOW_STORBAR')
    },
    correspondingStyle(colorName) {
      const colorObjectIndex = this.availableBackgroundNames.indexOf(colorName)
      return this.$store.state.backgroundColors[colorObjectIndex].style
    }
  },
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
