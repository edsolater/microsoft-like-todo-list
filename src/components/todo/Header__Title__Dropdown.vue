<template lang="pug">
  .Dropdown(
    @click.stop
  ) 
    .Item.container(
      @click="SHOW_SORTBAR"
      @mouseenter="countSeconds"
      @mouseleave="cancelCounting"
    )
      .Icon.container.hv-center
        font-awesome-icon(icon="angle-left")
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
  data(){
    return {
      timeoutId: null
    }
  },
  computed: {
    availableBackgroundNames: vm=> vm.$store.state.backgroundColors.map(colorObj => colorObj.colorName)
  },
  methods: {
    UPDATE_THEME(newColorName) {
      this.$store.commit('UPDATE_THEME',{newColorName})
    },
    SHOW_SORTBAR() {
      this.$store.commit('SHOW_SORTBAR')
    },
    correspondingStyle(colorName) {
      const colorObjectIndex = this.availableBackgroundNames.indexOf(colorName)
      return this.$store.state.backgroundColors[colorObjectIndex].style
    },
    countSeconds(){
      const setTimeoutId = setTimeout(() => {
        this.$store.commit('SHOW_DROPDOWN2')
      }, 200);
      this.timeoutId = setTimeoutId
    },
    cancelCounting(){
      if(this.$store.hasDropDown2 = false){
        clearTimeout(this.timeoutId)
      }
    }
  },
}
</script>


<style scoped>
.Dropdown {
  position: absolute;
  z-index: 1;
  right: 0;
  margin-top: 2.53rem;
  margin-right: 1.5rem;
  padding: 0.5rem;

  background: rgba(255, 255, 255, 0.877);
  box-shadow: var(--shadow);
}
.Item {
  height: var(--tab-height);
}
.Item:hover {
  background: var(--hover-background);
}
.Item .Icon {
  width: var(--icon-width);
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
