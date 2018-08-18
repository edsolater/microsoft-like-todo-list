<template lang="pug">
  .Sprite(
    :style="style"
  ) {{content}}
</template>

<script>
const randomColor = require('randomcolor')

export default {
  data() {
    return {
      style: {
        // 需要动态变化的放这里，静态的放stylesheet里
        fontSize: `${this._fn.random(0, 5, 2)}em`,
        color: randomColor({
          luminosity: 'ligkht',
          hue: 'green',
          format: 'rgba'
        }),
        transform: `rotate(${this._.random(90)}deg) translate(${this._.random(-1,1)}rem, ${this._.random(-1,1)}rem)`
      },
      contents: ['≈', '≡', '＝', '≒']
    }
  },
  computed:{
    content: vm => vm.contents[vm._.random(vm.contents.length)]  // 从可选字符中随机选取一个
  }
}
</script>

<style >
.Sprite {
  display: inline-block;
  user-select: none;
}
</style>
