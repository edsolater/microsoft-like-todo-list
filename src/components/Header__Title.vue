<template lang="pug">
.Title.container
  .Display-Text
    span {{computedTitle}}
    div.date(v-if="computedTitle == '我的一天'") {{now}}
  .Btngroup.container
    BaseBtn.Ellipsis-h(@click.stop="$store.commit('TOGGLE_DROPDOWN')")
      font-awesome-icon(icon="ellipsis-h")
    BaseBtn.Lightbulb(v-if="$store.state.selectedIndex === 0")
      font-awesome-icon(icon="lightbulb")
    BaseBtn.Users(v-if="$store.state.selectedIndex >= 3")
      font-awesome-icon(icon="users")
    transition(
      name="fade"
      enter-active-class="animated fast fadeIn"
      leave-active-class="animated fast fadeOut"
    )
      Dropdown.Dropdown(v-show="$store.state.hasDropdown")
</template>

<script>
import BaseBtn from './BaseBtn--style2'
import Dropdown from './Header__Title__Dropdown'
export default {
  components: {
    BaseBtn,
    Dropdown,
  },
  props: {
    computedTitle: {
      type: String,
      default: 'Default Worning~~'
    }
  },
  computed: {
    now() {
      const originDate = new Date()
      let day = originDate.getDay() // 获取当前的星期
      switch (day) {
        case 0:
          day = '天'
          break
        case 1:
          day = '一'
          break
        case 2:
          day = '二'
          break
        case 3:
          day = '三'
          break
        case 4:
          day = '四'
          break
        case 5:
          day = '五'
          break
        case 6:
          day = '六'
          break
      }
      let date = originDate.getDate() // 获取当前是几号
      let month = originDate.getMonth() + 1 // 获取当前的月份
      // if (month > 0 && month <= 9) month = "0" + month  // 0-9月份前置0
      return `${month}月${date}日，星期${day} `
    },
  },
}
</script>

<style scoped>
.Title {
  padding: 0 20px;
  justify-content: space-between;
  align-items: flex-end;
}
.Display-Text {
  color: #fff;
  font-size: 2.3rem;
  font-weight: bolder;
}
.date {
  font-weight: initial;
  font-size: 0.4em;
}
.Btngroup {
  flex-direction: row-reverse;
}
.Ellipsis-h,
.Lightbulb,
.Users {
  width: 3rem;
  padding: 0.2rem 0.6rem;
  margin: 0.3rem;
  background: rgba(0, 0, 0, 0.2);
  color: white;
}
.Dropdown {
  position: absolute;
  right: 0;
  margin-right: 1.5rem;
  margin-top: 2.53rem;
  z-index: 1;
  box-shadow: var(--shadow)
}
/* .fade-enter-active,
.fade-leave-active{
  transition: opacity 400ms;
}
.fade-enter,
.fade-leave-to{
  opacity: 0;
} */
/* .fade-enter-active {
  animation-duration: 1.5s;
  transition-duration: 0.4s;
  color: royalblue;
}
.fade-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  from {
    transform: scale(0);
    transform-origin: right top;
  }
} */
</style>

