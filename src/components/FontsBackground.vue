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
  },
}
</script>


<style scoped>
#UnicodeBackground {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow-wrap: break-word;
  overflow: hidden;
  mix-blend-mode: color;
  opacity: 0.3;
}
</style>
