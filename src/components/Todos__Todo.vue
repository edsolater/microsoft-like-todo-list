<template lang="pug">
  .container.Todo
    .container.icon
      BaseBtn.BaseBtn(
        :class=" todo.isFinished ? 'checked' : 'notChecked' "
        @click="$emit('toggle:isFinished', todo)"
      )
        font-awesome-icon(:icon="todo.isFinished ? 'check-circle' : 'circle'")
    .container.content.mr-auto.flex-column.pl-3
      span.upper
      | {{todo.content}}
      small.below(
        v-if="selectedTabIndex <= 2"
      ) To-Do
    .container.star
      BaseBtn.BaseBtn(
        :class="todo.isStared ? 'stared' : 'unStared'"
        @click="$emit('toggle:isStared', todo)"
      )
        font-awesome-icon(icon="star")
</template>

<script>
import BaseBtn from './BaseBtn.vue'

export default {
  components:{
    BaseBtn,
  },
  data() {
    return {
      // iconClass: {
      //   checked: todo.isFinished
      // }
    }
  },
  props: ["todo", "selectedTabIndex"],
};
</script>

<style scoped>
.Todo {
  border:1px solid #eee
}
.BaseBtn {
  font-size: 1.2rem;
  width:3rem;
}
.checked {
  color: green;
}
.notChecked {
  color: firebrick;
}
.content {
  justify-content: center;
}
small {
  font-size: .8em;
  color: lightgrey;
}
.stared {
  color:green;
}
.unStared {
  color:lightgrey;
}
</style>

