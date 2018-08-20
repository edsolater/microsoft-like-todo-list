<template lang="pug">
  .Dropdown2(
    @click.stop
  ) haha
</template>

<script>
import BaseBtn from './BaseBtn--style1'
export default {
  components: {
    BaseBtn,
  },
  computed: {
    availableBackgroundNames: vm=> vm.$store.state.Todo.backgroundColors.map(colorObj => colorObj.colorName)
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
      return this.$store.state.Todo.backgroundColors[colorObjectIndex].style
    }
  },
}
</script>


<style scoped>
.Dropdown2 {
  position: absolute;
  z-index: 1;
  top: 0;
  margin-top:4.8rem;
  margin-right:16.2rem;
  width: 20rem;
  height: 18rem;

  background: rgba(255, 255, 255, 0.877);
}

</style>
