<template lang="pug">
.Title.container
  .Display-Text
    span {{computedTitle}}
    div.date(v-if="computedTitle == '我的一天'") {{now}}
  .Btngroup.container
    BaseBtn.Ellipsis-h(@click.stop="$store.commit('TOGGLE_DROPDOWN')")
      font-awesome-icon(icon="ellipsis-h")
    BaseBtn.Lightbulb(v-if="$store.state.Todo.selectedIndex === 0")
      font-awesome-icon(icon="lightbulb")
    BaseBtn.Users(v-if="$store.state.Todo.selectedIndex >= 3")
      font-awesome-icon(icon="users")
    transition(
      enter-active-class="animated fast fadeIn"
      leave-active-class="animated fast fadeOut"
    )
      Dropdown.Dropdown(v-show="$store.state.Todo.hasDropdown")
    transition(
      enter-active-class="animated fast fadeIn"
      leave-active-class="animated fast fadeOut"
    )
      Dropdown2.Dropdown2(v-show="$store.state.Todo.hasDropdown2")
</template>

<script>
import BaseBtn from './BaseBtn--style2'
import Dropdown from './Header__Title__Dropdown'
import Dropdown2 from './Header__Title__Dropdown2'
export default {
  components: {
    BaseBtn,
    Dropdown,
    Dropdown2
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
    }
  }
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
  text-align: left;
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


</style>

