<template lang="pug">
  .Tab.container.hv-center(
    :class="{active: tab.index === $store.state.selectedIndex}"
    @click="$store.commit('$update_selectedIndex', { index :tab.index})"
  )
    .TabIcon.container
      font-awesome-icon(
        :icon="tab.iconName"
        :style="{color:tab.themes.colorName}"
      )
    .TabTitle.flex-auto(
      :contenteditable="tab.isEditable"
      @blur="update_tabTitle($event.target.textContent)"
    ) {{tab.title}}
</template>


<script>
import BaseInput from './BaseInput.vue'

import { mapState } from 'vuex'
export default {
  components: {
    BaseInput
  },
  props: {
    tab: {
      type: Object,
      default() {
        return {
          index: 0,
          title: 'Default',
          isEditable: false,
          themes: {
            colorName: 'dodgerblue',
            backgroundImage: 'car',
            hasSortBar: true
          }
        }
      }
    }
  },
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
  computed: {
    ...mapState(['selectedIndex', 'tabs'])
  },
  mounted() {
    if (this.tab.index >= 3) {
      this.$el.children[1].focus() // contenteditable 的DIV也是有效的
    }
  },
  methods: {
    update_tabTitle(title) {
      const payload = {
        index: this.tab.index,
        title: title
      }
      this.$emit('update:tabTitle', payload)
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
  background: var(--hover-background);
}
.Tab.active {
  font-weight: bold;
  border-left-color: rgba(35, 112, 228, 0.788);
  background: rgba(32, 32, 68, 0.06);
}
.TabIcon {
  width: var(--icon-width);
  justify-content: center;
  align-items: center;
}
.TabTitle {
  background: transparent;
  cursor: default;
}
</style>

