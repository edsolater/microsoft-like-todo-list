复杂逻辑层

<template lang="pug">
  .Tab(
    @click="update_selectedIndexById"
  )
    BaseEditableTab.container.hv-center(
      :class="{active: vfor_tab === $store.getters.currentTab}"
      :item="vfor_tab"
      @input:value="update_tabTitle"
      @cancel:editting="cancel_editting"
    )
      .IconEdit.container.hv-center(
        v-if="![0,1,2].includes(vfor_tab.id)"
        @click.stop="vfor_tab.isEditable=true"
      )
        font-awesome-icon(icon="edit")
      .IconEdit.container.hv-center.temp-margin(
        v-if="![0,1,2].includes(vfor_tab.id)"
        @click.stop="delete_tab"
      )
        font-awesome-icon(icon="trash-alt")
</template>


<script>
import BaseEditableTab from './BaseTab--editable'

import { mapState } from 'vuex'
export default {
  components: {
    BaseEditableTab,
  },
  props: {
    vfor_tab: {
      type: Object,
      default() {
        return {
          id: 0,
          title: 'Default',
          isEditable: true,
          themes: {
            colorName: 'dodgerblue',
            backgroundImage: 'car',
            hasSortBar: true
          }
        }
      }
    },
  },
  computed: {
    ...mapState(['selectedIndex', 'tabs'])
  },
  mounted() {
    if (![0, 1, 2].includes(this.vfor_tab.id)) {
      this.$el.children[0].children[1].focus() // contenteditable 的DIV也是有效的
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
    cancel_editting(){
      this.vfor_tab.isEditable = false
    },
    update_selectedIndexById() {
      this.$store.dispatch('update_selectedIndexById', { id: this.vfor_tab.id })
    },
    delete_tab() {
      this.$store.dispatch('delete_tab', { tab: this.vfor_tab, isEditable: this.vfor_tab.isEditable })
    },
    editAction() {
      this.vfor_tab.isEditable = true;
    }
  }
}
</script>

<style scoped>



:hover > .IconEdit {
  /* 显示条件 */
  display: flex;
}
.IconEdit {
  position: absolute;
  height: 100%;
  width: var(--icon-width);
  margin-right: 1.5rem;
  display: none;
  color: var(--disabled-color);
}
.IconEdit:hover {
  color: crimson;
}
.temp-margin {
  margin-left: 3rem;
}
</style>

