<template lang="pug">
  .vertical-container.Tabs
    .info Tabs
    Tab.tag(
      v-for="tab in tags"
      :key="tab.id"
      :tab="tab"
      :selectedTabID="selectedTabID"
      @update:selectedTabID="$emit('update:selectedTabID', $event)"
    )
    hr
    Tab.repos(
      v-for="tab in repos"
      :key="tab.id"
      :tab="tab"
      :selectedTabID="selectedTabID"
      @update:selectedTabID="$emit('update:selectedTabID', $event)"
    )
    BtnAdd.BtnAdd(
      @create:repo="create_repo"
    )
</template>

<script>
import Tab from "./Tabs__Tab.vue";
import BtnAdd from "./Tabs__BtnAdd.vue"



export default {
  components: {
    Tab,
    BtnAdd
  },
  props: ["selectedTabID"],
  data() {
    return {
      todos: this.GLOBAL.todos,
      tabs: this.GLOBAL.tabs,
    }
  },
  computed: {
    tags() {return this.tabs.slice(0, 3)},
    repos() {return this.tabs.slice(3)}
  },
  methods: {
    // event 传来的是 tag 对象
    delete_repo(tag) {
      const index = this.tabs.indexOf(tag)
      this.tabs.splice(index, 1)
    },
    create_repo() {
      // TODO:
      // console.log('here') => OK
    }
  }
};
</script>