<template lang="pug">
.vertical-container.Todos
  .info Todos
  Todo(
    v-for="todo in todos"
    v-bind:key="todo.id"
    :todo="todo"
  )
  Bar.Bar
</template>

<script>
import Todo from "./Todos__Todo"
import Bar from "./Todos__Bar"

export default {
  components: {
    Todo,
    Bar
  },
  data() {
    return {
      todos: this.$root.todos,
      selectedTabID: this.$root.selectedTabID,
      tabs: this.$root.tabs,
    }
  },
}
</script>
