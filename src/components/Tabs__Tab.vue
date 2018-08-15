<template lang="pug">
  .Tab.container.hv-center(
    :class="{active: vfor_tab.index === $store.state.selectedIndex}"
    @click="update_selectedIndex"
  )
    .TabIcon.container.center
      font-awesome-icon(
        :icon="vfor_tab.iconName"
        :style="{color:vfor_tab.themes.colorName}"
      )
    .TabTitle(
      :contenteditable="vfor_tab.isEditable"
      @blur="update_tabTitle($event.target.textContent)"
      @keydown.enter.prevent="update_tabTitle($event.target.textContent)"
    ) {{vfor_tab.title}}
    .TabClose(
      v-if="vfor_tab.isEditable"
      @click.stop='delete_tab'
    )
      font-awesome-icon(icon="times")
</template>


<script>
import BaseInput from './BaseInput'

import { mapState } from 'vuex'
export default {
  components: {
    BaseInput
  },
  props: {
    vfor_tab: {
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
        sun: this.vfor_tab.index == 0,
        star: this.vfor_tab.index == 1,
        clipboard: this.vfor_tab.index == 2,
        list: this.vfor_tab.index >= 3
      }
    }
  },
  computed: {
    ...mapState(['selectedIndex', 'tabs'])
  },
  mounted() {
    if (this.vfor_tab.index >= 3) {
      this.$el.children[1].focus() // contenteditable 的DIV也是有效的
    }
  },
  methods: {
    update_tabTitle(title) {
      const payload = {
        index: this.vfor_tab.index,
        title: title
      }
      this.$emit('update:tabTitle', payload)
    },
    update_selectedIndex() {
      this.$store.commit('UPDATE_SELECTEDINDEX', { index: this.vfor_tab.index })
    },
    delete_tab() {
      this.$store.dispatch('delete_tab', { tab: this.vfor_tab })
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
  flex: auto;
  background: transparent;
  cursor: default;
}
.TabClose {
  margin-right: 1.5rem;
  display: none;
  color: var(--disabled-color);
}
.TabClose:hover {
  color: crimson;
}
.Tab:hover > .TabClose {
  display: block;
}
</style>

