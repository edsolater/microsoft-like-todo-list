<template lang="pug">
  .Todos
    transition-group(
      name="list"
      move-class="transitive slow transform"
      enter-active-class="animated fadeIn"
    )
      Todo.Todo(
        v-for="todo in todosBelongToThisTab"
        :key="todo.dateCreated"
        :todo="todo"  
        @toggle:isFinished="toggle_isFinished"
        @toggle:isStared="toggle_isStared"
        @delete:todoItem="delete_todoItem"
      )
    TodoBar.TodoBar(
      @create:todo="$store.commit('CREATE_TODO',{newTodo:$event})"
    )
</template>

<script>
import Todo from './Todos__Todo'
import TodoBar from './Todos__TodoBar'
export default {
  components: {
    Todo,
    TodoBar
  },
  computed: {
    todos: vm => vm.$store.state.todos,
    tabs: vm => vm.$store.state.tabs,
    selectedIndex: vm => vm.$store.state.selectedIndex,
    todosBelongToThisTab: vm => vm.$store.getters.todosBelongToThisTab
  },
  methods: {
    toggle_isFinished(todo) {
      this.$store.commit('TOGGLE_isFinished', {todo})
    },
    toggle_isStared(todo) {
      this.$store.commit('TOGGLE_isStared', {todo})
    },
    delete_todoItem(todo) {
      this.$store.commit('DELETE_TODO', {todo})
    }
  }
}
</script>

<style scoped>
.Todos {
  overflow-y: auto;
}
.Todo {
  height: var(--todo-height);
}
.TodoBar {
  position: sticky;
  bottom: 0;
  height: var(--todo-height);
}
</style>

