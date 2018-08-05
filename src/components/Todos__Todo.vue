<template lang="pug">
  .container.Todo
    .info Todo
    .container.icon
      .info icon
      | {{todo.isFinished}}
    .container.content.flex-auto
      .info content
      | {{todo.content}}
    .container.star
      .info star
      | {{todo.isStared}}
</template>

<script>
export default {
  props: ["todo"]
};
</script>

<style scoped>

</style>

