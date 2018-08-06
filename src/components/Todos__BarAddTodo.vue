<template lang="pug">
  .container.Bar
   
    .container.icon
     
    .container.inputText.flex-auto
      Input.Input(
        placeholder="new todo here"
        v-model="inputText" 
        @keydown.enter="create_todo" /* 会向父级发送一个 create:todo 事件，并附带 inputText 的数据 */
      )
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
      inputText: ""
    };
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
      this.inputText = ""
    }
  }
};
</script>
