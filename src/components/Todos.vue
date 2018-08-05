<template lang="pug">
.vertical-container.Todos
  .info Todos
  Todo(
    v-for="todo in todos"
    v-bind:key="todo.id"
    :todo="todo"
  )
</template>

<script>
import Todo from "./Todos__Todo"

export default {
  components: {
    Todo,
  },
  data() {
    return {
      todos: this.$root.todos,
    }
  },
}
</script>
