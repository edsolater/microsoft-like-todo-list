<template lang="pug">
  .container.Tab(
    :class="{active: tab.id === selectedTabID}"
  )
    .info Tab: {{tab.id}}
    .container.icon
      .info icon
    .container.title.flex-auto(
      @click="$emit('update:selectedTabID', tab.id)"
    )
      .info title
      | {{tab.title}}
</template>


<script>
export default {
  props: ["tab", "selectedTabID"],
};
</script>

<style scoped>
.active {
  border-right: 5px solid blue
}
</style>

