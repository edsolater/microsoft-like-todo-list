<template lang="pug">
  .container
    .info Item
    Icon.Icon.p-3
    Content.Content.p-3
</template>

<script>
import Icon from "./TodoList__Item__Icon"
import Content from "./TodoList__Item__Content"

export default {
  components: {
    Icon,
    Content,
  },
}
</script>
