<template lang="pug">
  .Todos
    Todo.Todo(
      v-for="todo in currentTodos"
      v-bind:key="todo.index"
      :todo="todo"
      :selectedTabIndex="selectedTabIndex"
      @toggle:isFinished="toggle_isFinished"
      @toggle:isStared="toggle_isStared"
    )
    TodoBar.TodoBar(
      :selectedTabIndex="selectedTabIndex"
      @create:todo="create_todo"
    )
</template>

<script>
import Todo from "./Todos__Todo";
import TodoBar from "./Todos__TodoBar";
export default {
  components: {
    Todo,
    TodoBar
  },
  props: ["selectedTabIndex"],
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
        todo.belongToTabIDs.includes(this.selectedTabIndex)
      );
    }
  },
  methods: {
    create_todo(newTodo) {
      this.todos.push(newTodo);
    },
    toggle_isFinished(todo) {
      if (todo.isFinished) {
        this.$set(todo, 'isFinished', false)
      }else{
        this.$set(todo, 'isFinished', true)
      }
    },
    toggle_isStared(todo) {
      if (todo.isStared) {
        this.$set(todo, 'isStared', false)
      }else{
        this.$set(todo, 'isStared', true)
      }
    },
  }
};
</script>

<style scoped>
.Todo {
  height: var(--todo-height)
}
.TodoBar {
  position:sticky;
  bottom: 0;
  height: var(--todo-height)
}
</style>

