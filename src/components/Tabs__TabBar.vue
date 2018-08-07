<template lang="pug">
  .container.TabBar(@click="$emit('create:repo')")
    .icon
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

<style>
.TabBar {
  background:white;
  padding: var(--tab-padding);
}

</style>
