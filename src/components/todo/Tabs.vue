<template lang="pug">
  .Tabs
    Tab.TabTag(
      v-for="vfor_tag in tags"
      :key="vfor_tag.id"
      :vfor_tab="vfor_tag"
    )
    hr
    transition-group(
      name="list"
      move-class="transitive slow transform"
      enter-active-class="animated fadeIn"
    )
      Tab.TabRepo(
        v-for="vfor_repo in repos"
        :key="vfor_repo.id"
        :vfor_tab="vfor_repo"
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
    
    ...mapGetters(['tags', 'repos'])
  },
  methods: {
    create_repo() {
      const newTab = {
        id: Math.random(),
        title: '',
        isEditable: true,
        iconName: 'list',
        themes: {
          colorName: 'dodgerblue',
          backgroundImage: 'car',
          hasSortBar: true
        }
      }
      // 注意发生的先后顺序，决定了 index 要不要减一
      this.$store.commit('CREATE_TAB', { newTab })
      this.$store.commit('UPDATE_SELECTEDINDEX', {
        index: this.$store.state.Todo.tabs.length - 1
      })
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
