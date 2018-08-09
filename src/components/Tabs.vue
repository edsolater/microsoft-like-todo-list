<template lang="pug">
  .Tabs
    Tab.TabTag(
      v-for="tab in tags"
      :key="tab.index"
      :tab="tab"
      :selectedTabIndex="selectedTabIndex"
      @update:selectedTabIndex="$emit('update:selectedTabIndex', $event)"
    )
    hr
    Tab.TabRepo(
      v-for="tab in repos"
      :key="tab.index"
      :tab="tab"
      :selectedTabIndex="selectedTabIndex"
      @update:selectedTabIndex="$emit('update:selectedTabIndex', $event)"
    )
    TabBar.TabBar(
      @create:repo="create_repo"
    )
</template>

<script>
import Tab from './Tabs__Tab.vue'
import TabBar from './Tabs__TabBar.vue'

export default {
  components: { Tab, TabBar },
  props: ['selectedTabIndex'],
  data() {
    return {
      todos: this.GLOBAL.todos,
      tabs: this.GLOBAL.tabs
    }
  },
  computed: {
    tags() {
      return this.tabs.slice(0, 3)
    },
    repos() {
      return this.tabs.slice(3)
    }
  },
  methods: {
    // event 传来的是 tag 对象
    delete_repo(tag) {
      const index = this.tabs.indexOf(tag)
      this.tabs.splice(index, 1)
    },
    create_repo() {
      const newTab = {
        index: this.tabs.length,
        title: '待输入',
        isEditable: true,
        themes: {
          color: 'blue',
          backgroundImage: 'car',
          hasSortBar: true
        }
      }
      this.tabs.push(newTab)
    }
  }
}
</script>

<style scoped>
.Tabs {
  position: relative;
  overflow-y: auto;
}
.TabTag,
.TabRepo,
.TabBar {
  height: var(--tab-height);
}
.TabBar {
  position: sticky;
  bottom: 0;
}
</style>
