<template lang="pug">
  .container.TabBar(@click="$emit('create:repo')")
    .Icon
      font-awesome-icon(icon="plus")
    | 新建清单
</template>

<script>
import Btn from './BaseBtn.vue'
export default {
  components: {
    Btn
  }
}
</script>

<style scoped>
.TabBar {
  background:white;
  padding: var(--tab-padding);
}

</style>
