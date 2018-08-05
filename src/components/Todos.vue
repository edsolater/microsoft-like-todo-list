<template lang="pug">
.vertical-container.Todos
  .info Todos
  Todo(
    v-for="todo in currentTodos"
    v-bind:key="todo.id"
    :todo="todo"
  )
  Bar.Bar(
    :selectedTabID="selectedTabID"
    @create:todo="create_todo"
  )
</template>

<script>
import Todo from "./Todos__Todo";
import Bar from "./Todos__Bar";

export default {
  components: {
    Todo,
    Bar
  },
  props: ["selectedTabID"],
  data() {
    return {
      todos: this.GLOBAL.todos,
      tabs: this.GLOBAL.tabs
    };
  },
  computed: {
    currentTodos() {
      // 选出 todos 中属于当前 tab 的 todos
      return this.todos.filter(todo =>
        todo.belongToTabIDs.includes(this.selectedTabID)
      );
    }
  },
  methods: {
    create_todo(newTodo){
      this.todos.push(newTodo)
    }
  }
};
</script>
