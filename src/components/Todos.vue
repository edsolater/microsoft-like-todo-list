<template lang="pug">
  .Todos
    transition-group(
      name="list"
      move-class="transitive slow transform"
      enter-active-class="animated fadeIn"
    )
      Todo.Todo(
        v-for="todo in currentTodos"
        :key="todo.dateCreated"
        :todo="todo"
        @toggle:isFinished="toggle_isFinished"
        @toggle:isStared="toggle_isStared"
      )
    TodoBar.TodoBar(
      @create:todo="$store.commit('create_todo',{newTodo:$event})"
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
  data() {
    return {
      todos: this.$store.state.todos,
      tabs: this.$store.state.tabs
    }
  },
  computed: {
    selectedTabIndex(){
      return this.$store.state.selectedTabIndex
    },
    // 选出 todos 中属于当前 tab 的 todos
    currentTodos() {
      return this.$store.getters.currentTodos
    }
  },
  methods: {
    toggle_isFinished(todo) {
      if (todo.isFinished) {
        this.$set(todo, 'isFinished', false)
      } else {
        this.$set(todo, 'isFinished', true)
      }
    },
    toggle_isStared(todo) {
      if (todo.isStared) {
        this.$set(todo, 'isStared', false)
      } else {
        this.$set(todo, 'isStared', true)
      }
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

