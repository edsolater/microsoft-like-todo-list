<template lang="pug">
  .container
    .info Item
    Icon.Icon.p-3
    Content.Content.p-3
</template>

<script>
import Icon from "./WorkSpace__TodoList__Item__Icon"
import Content from "./WorkSpace__TodoList__Item__Content"

export default {
  components: {
    Icon,
    Content,
  },
}
</script>
