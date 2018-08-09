<template lang="pug">
  .SearchBtn.container
    BaseBtn.Search
      font-awesome-icon(icon="search")
</template>

<script>
import BaseBtn from './BaseBtn--style1.vue'
export default {
  components: {
    BaseBtn
  }
}
</script>

<style scoped>
.Search{
  height: 2em;
}
</style>

