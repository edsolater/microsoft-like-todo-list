<template lang="pug">
  .Bar.container
    .Circle.container
      font-awesome-icon(icon="circle")
    .InputText.container
      BaseInput.BaseInput(
        placeholder="添加待办事项"
        v-model="inputText" 
        @keydown.enter="CREATE_TODO" /* 会向父级发送一个 create:todo 事件，并附带 inputText 的数据 */
      )
    .Times.container(v-if="inputText" @click="inputText=''")
      font-awesome-icon(icon="times")
    .Text.container(
      v-if="inputText"
      @click="CREATE_TODO"
    ) 添加
</template>

<script>
import BaseInput from './BaseInput'
export default {
  components: {
    BaseInput
  },
  data() {
    return {
      inputText: ''
    }
  },
  computed: {
    selectedIndex() {
      return this.$store.state.selectedIndex
    }
  },
  methods: {
    CREATE_TODO() {
      // 不能接受空值
      if (!this.inputText.trim()) return
      const newTodo = {
        dateCreated: Date.now(),
        content: this.inputText,
        isFinished: false,
        isStared: false,
        belongToTabIDs: [this.selectedIndex]
      }
      this.$emit('create:todo', newTodo)
      // 清空 input 里的数据内容
      this.inputText = ''
    }
  }
}
</script>

<style scoped>
.Bar {
  background:transparent;
  color: var(--link-color);
  border-top: 1px solid var(--line-color);
  padding: var(--todo-padding);
}
.Circle {
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 1.2rem;
  width: var(--icon-width);
  color: var(--disabled-color);
}
.InputText {
  height: 100%;
  flex: auto;
  align-items: center;
}
.BaseInput {
  color: var(--link-color);
}
.Times {
  justify-content: center;
  align-items: center;
  color: var(--disabled-color);
}
.Times:hover {
  color: unset;
}
.Text {
  padding: 0 10px;
  align-items: center;
}
.Text:hover {
  background: rgba(0, 0, 0, 0.1);
}
</style>

