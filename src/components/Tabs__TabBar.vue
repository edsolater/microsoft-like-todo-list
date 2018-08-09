<template lang="pug">
  .TabBar.container.center(@click="$emit('create:repo')")
    .Icon.container.center
      font-awesome-icon(icon="plus")
    .Text.flex-auto
      | 新建清单
</template>

<script>
import Btn from './BaseBtn--style1.vue'
export default {
  components: {
    Btn
  }
}
</script>

<style scoped>
.TabBar {
  padding: var(--tab-padding);
  background:white;
  color: var(--link-color);
  border-left: 5px solid transparent;
  border-radius: 2px;
}
.TabBar:hover {
  background: rgba(32, 32, 68, 0.03);
}
.Icon {
  width: var(--icon-width);
  justify-content: center;
  align-items: center;
}
</style>
