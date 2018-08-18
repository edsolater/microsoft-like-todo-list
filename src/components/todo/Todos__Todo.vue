<template lang="pug">
  .Todo.container.v-center
    .Check.container
      font-awesome-icon(
        :icon="todo.isFinished ? 'check-circle' : 'circle'"
        :class=" todo.isFinished ? 'finished' : 'unFinished' "
        @click="$emit('toggle:isFinished', todo)"
      )
    .Content
      div.upper(:class="todo.isFinished ? 'todo-done':''") {{todo.content}}
      small.below(v-if="selectedIndex <= 2") To-Do
    .Delete
      font-awesome-icon(icon="times"
        @click="$emit('delete:todoItem', todo)"
      )
    .Star.container
      font-awesome-icon(
        icon="star"
        :class="todo.isStared ? 'stared' : 'unStared'"
        @click="$emit('toggle:isStared', todo)"
      )
</template>

<script>
import BaseBtn from './BaseBtn--style1'
export default {
  components: { BaseBtn },
  props: {
    todo: {
      type: Object,
      default: ()=>({
        dateCreated: Math.random(),
        content: `haven't completed yet`,
        isFinished: false,
        isStared: false,
        belongToTabIDs: [0, 1, 2]
      })
    },
  },
  data(){
    return{
      selectedIndex: this.$store.state.selectedIndex
    }
  }
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
  left:0;
  bottom: 0;
  background: var(--line-color);
  transform: scale(.9);
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
.finished {
  color: green;
}
.unFinished {
  color: var(--disabled-color);
}
.Content {
  margin-right: auto;
  text-align: initial;
}
.todo-done {
  text-decoration: line-through;
}
small {
  font-size: 0.8em;
  color: lightgrey;
}
.Delete {
  margin-right:1rem;
  color: var(--disabled-color);
  transition: color .2s;
}
.Delete:hover {
  color: crimson;
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

