<template lang="pug">
  .Tab.container.center(
    :class="{active: tab.index === selectedTabIndex}"
    @click="$emit('update:selectedTabIndex', tab.index)"
  )
    .Icon.container
      font-awesome-icon(
        icon="sun"
        v-if="tab.index === 0"
      )
      font-awesome-icon(
        icon="star"
        v-if="tab.index === 1"
      )
      font-awesome-icon(
        icon="clipboard-check"
        v-if="tab.index === 2"
      )
      font-awesome-icon(
        icon="list"
        v-if="tab.index >= 3"
      )
    .Title.flex-auto(
      :contenteditable="tab.isEditable"
      @blur="update_tabTitle($event.target.textContent)"
    ) {{tab.title}}
</template>


<script>
import BaseInput from './BaseInput.vue'
export default {
  components: {
    BaseInput
  },
  props: ['tab', 'selectedTabIndex'],
  data() {
    return {
      icon: {
        sun: this.tab.index == 0,
        star: this.tab.index == 1,
        clipboard: this.tab.index == 2,
        list: this.tab.index >= 3
      }
    }
  },
  mounted() {
    if (this.tab.index >= 3) {
      console.log(this.$el.children[1])
      this.$el.children[1].focus() // contenteditable 的DIV也是有效的
    }
  },
  methods: {
    update_tabTitle(newName) {
      // this.$set(this.tab, 'title', newName)// DOM 操作
      this.tab.title = newName  // 也能生效，神奇. 说明这改变了值的地址 
      console.log(`update:title`)
    },
    say(specified){
      console.log(specified)
    }
  }
}
</script>

<style scoped>
.Tab {
  border-left: 5px solid transparent;
  border-radius: 2px;
  padding: var(--tab-padding);
}
.Tab:hover {
  background: rgba(32, 32, 68, 0.03);
}
.Tab.active {
  font-weight: bold;
  border-left-color: rgba(35, 112, 228, 0.788);
  background: rgba(32, 32, 68, 0.06);
}
.Icon {
  color: dodgerblue;
  width: var(--icon-width);
  justify-content: center;
  align-items: center;
}
.Title {
  background: transparent;
  cursor: default;
}
</style>

