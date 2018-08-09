<template lang="pug">
.Title.container
  .Display-Text
    span {{currentTitle}}
    div.date(v-if="currentTitle == '我的一天'") {{now}}
  .Btngroup.container
    BaseBtn.More
      font-awesome-icon(icon="ellipsis-h")
    BaseBtn.Tips(v-if="selectedTabIndex === 0")
      font-awesome-icon(icon="lightbulb")
    BaseBtn.Users(v-if="selectedTabIndex >= 3")
      font-awesome-icon(icon="users")
</template>

<script>
import BaseBtn from './BaseBtn--style2.vue'
export default {
  components: {
    BaseBtn
  },
  props: ['currentTitle', 'selectedTabIndex'],
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
  width:3rem;
  padding: .2rem .6rem;
  margin: .3rem;
  background: rgba(0,0,0,.2);
  color: white;
}
</style>

