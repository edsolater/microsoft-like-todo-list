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
        @update:tabTitle="update_tabTitle"
      )
    TabBar.TabBar(
      @create:repo="create_repo"
    )
</template>

<script>
import Tab from './Tabs__Tab'
import TabBar from './Tabs__TabBar'
import { mapState, mapGetters } from 'vuex'

export default {
  components: { Tab, TabBar },
  computed: {
    ...mapState(['todos', 'tabs']),
    ...mapGetters(['tags', 'repos'])
  },
  methods: {
    create_repo() {
      const newRepo = {
        index: this.tabs.length,
        title: '待输入',
        isEditable: true,
        iconName: 'list',
        themes: {
          colorName: 'dodgerblue',
          backgroundImage: 'car',
          hasSortBar: true
        }
      }
      // 注意发生的先后顺序，决定了 index 要不要减一
      this.$store.commit('$create_repo', { newRepo })
      this.$store.commit('$update_selectedIndex', {
        index: this.tabs.length - 1
      })
    },
    update_tabTitle(payload) {
      this.$store.commit('$update_tabTitle', payload)
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
