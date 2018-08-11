<template lang="pug">
  .Tabs
    Tab.TabTag(
      v-for="tag in tags"
      :key="tag.index"
      :tab="tag"
    )
    hr
    transition-group(
      name="list"
      move-class="transitive slow transform"
      enter-active-class="animated fadeIn"
    )
      Tab.TabRepo(
        v-for="repo in repos"
        :key="repo.index"
        :tab="repo"
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
  data() {
    return {
      todos: this.$store.state.todos,
      tabs: this.$store.state.tabs,
    }
  },
  computed: {
    tags() {
      return this.tabs.slice(0, 3)
    },
    repos() {
      return this.tabs.slice(3)
    },
  },
  methods: {
    create_repo() {
      const newRepo = {
        index: this.tabs.length,
        title: '待输入',
        isEditable: true,
        themes: {
          colorName: 'springgreen',
          backgroundImage: 'car',
          hasSortBar: true,
        },
      }
      // 注意发生的先后顺序，决定了 index 要不要减一
      this.$store.commit('create_repo', {newRepo})
      this.$store.commit('update_selectedTabIndex', {newSelectedTabID : this.tabs.length -1})
    },
  },
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
