<template lang="pug">
  .container.Bar
    .container.circle
      font-awesome-icon(icon="circle")
    .container.input
      Input.Input(
        placeholder="new todo here"
        v-model="inputText" 
        @keydown.enter="create_todo" /* 会向父级发送一个 create:todo 事件，并附带 inputText 的数据 */
        @focus="isFocused = true"
        @blur="isFocused = false"
      )
    .container.times(v-if="inputText" @click="inputText=''")
      font-awesome-icon(icon="times")
    .container.text(
      v-if="inputText"
      @click="create_todo"
    ) 添加
</template>

<script>
import Input from "./BaseInput.vue";
export default {
  components: {
    Input
  },
  props: ["selectedTabIndex"],
  data() {
    return {
      inputText: "",
      isFocused: false
    };
  },
  computed: {
    readyToPush() {
      if (this.inputText || this.isFocused) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    create_todo() {
      const newTodo = {
        dateCreated: Date.now(),
        content: this.inputText,
        isFinished: false,
        isStared: false,
        belongToTabIDs: [this.selectedTabIndex]
      };
      this.$emit("create:todo", newTodo);
      // 清空 input 里的数据内容
      this.inputText = "";
    },
  }
};
</script>

<style scoped>
.Bar {
  background: white;
  color: var(--link-color);
  border-top: 1px solid var(--line-color);
  padding: var(--todo-padding);
}
.circle {
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 1.2rem;
  width: var(--icon-width);
  color: var(--disabled-color);
}
.input {
  height: 100%;
  flex: auto;
  align-items: center;
}
.times {
  justify-content: center;
  align-items: center;
  color: var(--disabled-color);
}
.times:hover {
  color: unset;
}
.text {
  padding: 0 10px;
  align-items: center;
}
.text:hover {
  background: rgba(0, 0, 0, 0.1);
}
</style>

