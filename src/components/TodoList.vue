<template lang="pug">
.vertical-container.TodoList
  .info TodoList
  Item(
    v-for="todo in todos"
    v-bind:key="todo.id"
  )
</template>

<script>
import Item from "./TodoList__Item"

export default {
  components: {
    Item,
  },
  data() {
    return {
      todos: this.$root.todos,
    }
  },
}
</script>
