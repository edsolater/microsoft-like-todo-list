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
        fontSize: this._.random(2, 6) + 'rem',
        fontWeight: 'lighter',
        color: randomColor({
          luminosity: 'light',
          hue: 'green',
          format: 'rgba'
        }),
        opacity: this._.random(3, 8) / 10,
        // transform: `rotate(${this._.random(90)}deg)`
        transform: `rotate(${this._.random(90)}deg) translate(${this._.random(-2, 2)}rem, ${this._.random(-2, 2)}rem)`
      },
      contents: ['＋', '－', '×', '÷']
    }
  },
  computed: {
    content: vm => vm.contents[vm._.random(vm.contents.length)] // 从可选字符中随机选取一个
  }
}
</script>

<style lang="scss" scoped>
.Sprite {
  user-select: none;
}
</style>
