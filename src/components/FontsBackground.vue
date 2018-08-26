<template lang="pug">
  #UnicodeBackground
    Sprite(
      v-for="i in 400"
      :key="i"
    )
</template>

<script>
import Sprite from './FontsBackground__Sprite'
export default {
  components: {
    Sprite
  }
}
</script>


<style scoped>
#UnicodeBackground {
  display: grid;
  grid-template-columns: repeat(28, 5rem);
  grid-auto-rows: 5rem;
  mix-blend-mode: color;
  justify-items: center;
  align-items: center;
  position: fixed;
  top:0;
  z-index: -1;
  pointer-events: none;
  background: aliceblue;
}
</style>
