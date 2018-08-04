<template lang="pug">
.vertical-container
  .info the workspace
  Header.Header
  TodoList.TodoList
  Bar.Bar
</template>

<script>
import Header from "./WorkSpace__Header"
import TodoList from "./WorkSpace__TodoList"
import Bar from "./WorkSpace__Bar"

export default {
  components: {
    Header,
    TodoList,
    Bar
  },
}
</script>
