<template lang="pug">
  .container.BtnAdd
   
    Btn.Btn.tab-height(
      @click="$emit('create:repo')"
    ) add a new tab
</template>

<script>
import Btn from './BaseBtn.vue'


export default {
  components: {
    Btn
  }
}
</script>

<style>
/* TODO: 默认UI太丑了，美化它！ */
.Btn {
  outline: none;
}
</style>
