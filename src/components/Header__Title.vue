<template lang="pug">
.Title.container
  .Display-Text
    span {{currentTitle}}
    div.date(v-if="currentTitle == '我的一天'") {{now}}
  .Btngroup.container
    BaseBtn.More(@click.stop="toggle_dropdown")
      font-awesome-icon(icon="ellipsis-h")
    BaseBtn.Tips(v-if="selectedTabIndex === 0")
      font-awesome-icon(icon="lightbulb")
    BaseBtn.Users(v-if="selectedTabIndex >= 3")
      font-awesome-icon(icon="users")
    Dropdown.Dropdown(
      v-show="hasDropdown"
      :selectedTabIndex="selectedTabIndex"
    )
</template>

<script>
import BaseBtn from './BaseBtn--style2.vue'
import Dropdown from './Header__Title__Dropdown.vue'
export default {
  components: {
    BaseBtn,
    Dropdown
  },
  props: ['currentTitle', 'selectedTabIndex'],
  data() {
    return {
      global: this.GLOBAL,
    }
  },
  computed: {
    hasDropdown(){
      return this.global.hasDropdown
    },
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
  },
  methods: {
    toggle_dropdown() {
      if (this.hasDropdown) {
        this.$set(this.GLOBAL, 'hasDropdown', false)
      } else {
        this.global.hasDropdown = true
      }
      console.log(this.GLOBAL)
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
}
.date {
  font-weight: initial;
  font-size: 0.4em;
}
.Btngroup {
  flex-direction: row-reverse;
}
.More,
.Tips,
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
  box-shadow: 0 0 5px 4px rgba(0, 0, 0, 0.1);
}
</style>

