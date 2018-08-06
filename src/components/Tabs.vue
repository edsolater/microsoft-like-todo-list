<template lang="pug">
  .container.flex-column.Tabs
    Tab.tab-height.tag(
      v-for="tab in tags"
      :key="tab.index"
      :tab="tab"
      :selectedTabIndex="selectedTabIndex"
      @update:selectedTabIndex="$emit('update:selectedTabIndex', $event)"
    )
    hr
    Tab.tab-height.repos(
      v-for="tab in repos"
      :key="tab.index"
      :tab="tab"
      :selectedTabIndex="selectedTabIndex"
      @update:selectedTabIndex="$emit('update:selectedTabIndex', $event)"
    )
    BtnAdd.todo-height.BtnAdd(
      @create:repo="create_repo"
    )
</template>

<script>
import Tab from "./Tabs__Tab.vue";
import BtnAdd from "./Tabs__BtnAddTab.vue";

export default {
  components: {
    Tab,
    BtnAdd
  },
  props: ["selectedTabIndex"],
  data() {
    return {
      todos: this.GLOBAL.todos,
      tabs: this.GLOBAL.tabs
    };
  },
  computed: {
    tags() {
      return this.tabs.slice(0, 3);
    },
    repos() {
      return this.tabs.slice(3);
    }
  },
  methods: {
    // event 传来的是 tag 对象
    delete_repo(tag) {
      const index = this.tabs.indexOf(tag);
      this.tabs.splice(index, 1);
    },
    create_repo() {
      const newTab = {
        index: this.tabs.length,
        title: "待输入",
        isEditable: true,
        themes: {
          color: "blue",
          backgroundImage: "car",
          hasBarSort: true
        }
      };
      this.tabs.push(newTab);
    }
  }
};
</script>