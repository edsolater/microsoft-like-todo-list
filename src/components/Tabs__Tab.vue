<template lang="pug">
  .Tab.container.hv-center(
    :class="{active: vfor_tab === $store.getters.currentTab}"
    @click="update_selectedIndex"
    @dblclick="delete_tab"
  )
    .TabIcon.container.hv-center
      font-awesome-icon(
        :icon="vfor_tab.iconName"
        :style="{color:vfor_tab.themes.colorName}"
      )
    TabName(
      :isEditable="isEditable"
      :value="vfor_tab.title"
      :placeholder="'wuwu'"
      :readonly="readonly"
      @input="update_tabTitle($event.target.value)"
      @keydown.enter.prevent="update_tabTitle($event.target.value)"
    )
    .TabDelete.container.hv-center(
      v-if="vfor_tab.isEditable"
      @click="isEditable=!isEditable;readonly=!readonly"
    )
      font-awesome-icon(icon="edit")
</template>


<script>
import BaseInput from './BaseInput'
import TabName from './Tabs__Tab__TabName'

import { mapState } from 'vuex'
export default {
  components: {
    BaseInput,
    TabName
  },
  props: {
    vfor_tab: {
      type: Object,
      default() {
        return {
          id: 0,
          title: 'Default',
          isEditable: false,
          themes: {
            colorName: 'dodgerblue',
            backgroundImage: 'car',
            hasSortBar: true
          }
        }
      }
    },
  },
  data() {
    return {
      isEditable: false,
      readonly: true
    }
  },
  computed: {
    ...mapState(['selectedIndex', 'tabs'])
  },
  mounted() {
    if (![0, 1, 2].includes(this.vfor_tab.id)) {
      this.$el.children[1].focus() // contenteditable 的DIV也是有效的
    }
  },
  methods: {
    update_tabTitle(title) {
      const payload = {
        id: this.vfor_tab.id,
        title: title
      }
      this.$store.commit('UPDATE_TABTITLE', payload)
    },
    cancel_editing(){
      this.isEditable = false
    },
    update_selectedIndex() {
      this.$store.dispatch('update_selectedIndexById', { id: this.vfor_tab.id })
    },
    delete_tab() {
      this.$store.dispatch('delete_tab', { tab: this.vfor_tab, isEditable: this.vfor_tab.isEditable })
    }
  }
}
</script>

<style scoped>
.Tab {
  border-left: 5px solid transparent;
  border-radius: 2px;
  padding: var(--tab-padding);
  transition: all 0.2s ease, background-color 1s ease;
  transform: perspective(8rem) translateZ(0rem);
}
.Tab:hover {
  background: var(--hover-background);
  transition: all 0.2s ease, background-color 0s ease;
}
.Tab.active {
  font-weight: bold;
  border-left-color: rgba(35, 112, 228, 0.788);
  background: rgba(32, 32, 68, 0.06);
}
.Tab:active {
  background-color: rgba(0, 0, 0, 0.1);
  border-left-color: rgba(14, 66, 145, 0.788);
  transform: perspective(8rem) translateZ(-0.5rem);
}
.TabIcon {
  width: var(--icon-width);
}

.TabDelete {
  position: absolute;
  height: 100%;
  width: var(--icon-width);
  margin-right: 1.5rem;
  display: none;
  color: var(--disabled-color);
}
.TabDelete:hover {
  color: crimson;
}
.Tab:hover > .TabDelete {
  display: flex;
}
</style>

