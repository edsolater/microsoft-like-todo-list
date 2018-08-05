<template lang="pug">
  .container.Tab
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
  props: ["tab"],
};
</script>
