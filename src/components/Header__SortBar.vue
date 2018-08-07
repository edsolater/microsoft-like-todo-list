<template lang="pug">
  .SortBar.container
    small.DateText 按创建日期排列
    BaseBtn.BaseBtn1
      font-awesome-icon(icon="angle-down")
    BaseBtn.BaseBtn2(
      @click="$emit('toggle:hasSortBar')"
    )
      font-awesome-icon(icon="times")
</template>

<script>
import BaseBtn from './BaseBtn.vue'

export default {
  components: {
    BaseBtn,
  },
  props:['title'],
}
</script>

<style scoped>
.SortBar {
  color: white;
  align-items: center;
  padding-left: 1.3rem;
  padding-right: 1.3rem;
}
.BaseBtn1,
.BaseBtn2 {
  background:transparent;
}
.BaseBtn1 {
  margin-right: auto;
  margin-left: 14px;
}
</style>
