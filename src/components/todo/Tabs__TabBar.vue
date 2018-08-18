<template lang="pug">
  .TabBar.container.hv-center(@click="$emit('create:repo')")
    .Icon.container.hv-center
      font-awesome-icon(icon="plus")
    .Text.flex-auto
      | 新建清单
</template>

<script>
import Btn from './BaseBtn--style1'
export default {
  components: {
    Btn
  }
}
</script>

<style scoped>
.TabBar {
  padding: var(--tab-padding);
  background:transparent;
  color: var(--link-color);
  border-left: 5px solid transparent;
  border-radius: 2px;
}
.TabBar:hover {
  background: var(--hover-background);
}
.Icon {
  width: var(--icon-width);
  justify-content: center;
  align-items: center;
}
.Text {
  text-align: initial;
}
</style>
