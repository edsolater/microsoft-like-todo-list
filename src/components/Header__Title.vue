<template lang="pug">
.container.flex-column.Title
 
  p.mb-1 {{currentTitle}}
  div.date(
    v-if="currentTitle == '我的一天'"
  )
    | {{now}}
</template>

<script>
export default {
  props: ['currentTitle'],
  computed: {
    now() {
      const originDate = new Date()
      let day = originDate.getDay()  // 获取当前的星期
      switch (day){
        case 0 : day = '天'; break;
        case 1 : day = '一'; break;
        case 2 : day = '二'; break;
        case 3 : day = '三'; break;
        case 4 : day = '四'; break;
        case 5 : day = '五'; break;
        case 6 : day = '六'; break;
      }
      let date = originDate.getDate()  // 获取当前是几号
      let month = originDate.getMonth() + 1  // 获取当前的月份
      // if (month > 0 && month <= 9) month = "0" + month  // 0-9月份前置0

      return `${month}月${date}日，星期${day} `
    }
  }
}
</script>

<style scoped>
.Title {
  color: #fff;
  font-size: 2.3rem;
  font-weight: bolder;
  align-items: flex-start;
}
.date {
  font-weight: initial;
  font-size: 1rem;
}
</style>

