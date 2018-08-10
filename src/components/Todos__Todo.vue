<template lang="pug">
  .Todo.container
    .Check.container
      font-awesome-icon(
        :icon="todo.isFinished ? 'check-circle' : 'circle'"
        :class=" todo.isFinished ? 'checked' : 'notChecked' "
        @click="$emit('toggle:isFinished', todo)"
      )
    .Content.container
      span.upper(:class="todo.isFinished ? 'todo-done':''") {{todo.content}}
      small.below(v-if="selectedTabIndex <= 2") To-Do
    .Star.container
      font-awesome-icon(
        icon="star"
        :class="todo.isStared ? 'stared' : 'unStared'"
        @click="$emit('toggle:isStared', todo)"
      )
</template>

<script>
import BaseBtn from './BaseBtn--style1.vue'
export default {
  components: { BaseBtn },
  props: ['todo', 'selectedTabIndex']
}
</script>

<style scoped>
.Todo {
  position: relative;
  padding: var(--todo-padding);
}
.Todo::after {
  content: '';
  width: 100%;
  height: 1px;
  position: absolute;
  bottom: 0;
  background: var(--line-color);
}
.Todo:hover {
  background: var(--hover-background);
}
.Check {
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  width: var(--icon-width);
}
.checked {
  color: green;
}
.notChecked {
  color: var(--disabled-color);
}
.Content {
  justify-content: center;
  flex-direction: column;
  margin-right: auto;
}
.todo-done {
  text-decoration: line-through;
}
small {
  font-size: 0.8em;
  color: lightgrey;
}
.Star {
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  width: var(--icon-width);
}
.stared {
  color: gold;
}
.unStared {
  color: var(--disabled-color);
}
</style>

