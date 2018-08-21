<template lang="pug">
  li
    div(:class='{bold: isFolder}'
      @click='clickAction()'
      @dblclick='changeToFolder()')
      BaseTab(style="width:16rem;"
        v-bind=`{
          title: model.name,
          isOpen: isOpen,
          isActive: isActive,
        }`)
        template(slot="tailer-icon")
          span(v-if='isFolder') [{{ isOpen ? '-' : '+' }}]
          div(v-else)
    ul(v-if='isOpen && isFolder')
      //- 递归自身
      item.item(v-for='(newModel, index) in model.children'
        :key='index'
        :model='newModel'
        :currentPath="currentPath")
      //- li.add(@click='_addChild()') +
</template>

<script>
/* eslint-disable */
import _ from 'lodash'

import BaseTab from './BaseTab'
export default {
  name: 'item',
  components: {
    BaseTab
  },
  props: {
    model: Object,
    currentPath: Array
  },
  data() {
    return {
      isOpen: false,
      level: this.currentPath.length,
      abovePath: [...this.currentPath] // 因为这个集合本体是一串地址，所以应该拓印下来。
    }
  },
  computed: {
    isFolder() {
      if (this.model.children && this.model.children.length) return true
      else return false
    },
    isActive() {
      if (this.currentPath.includes(this.model.id)) return true
      else return false
    }
  },

  methods: {
    _add() {
      this.$store.commit('UPDATE_PATH', {
        mode: 'add',
        id: this.model.id,
        level: this.level,
        abovePath: this.abovePath
      })
    },
    _remove() {
      this.$store.commit('UPDATE_PATH', {
        mode: 'remove',
        id: this.model.id,
        level: this.level,
        abovePath: this.abovePath
      })
    },
    _fileToFolder() {
      this.$set(this.model, 'children', [])
    },
    _openTheFolder() {
      this.isOpen = true
    },
    _closeTheFolder() {
      this.isOpen = false
    },
    _toggleTheFolder() {
      this.isOpen = !this.isOpen
    },
    _addChild: function() {
      this.model.children.push({
        name: 'new stuff',
        id: Date.now()
      })
    },
    clickAction() {
      if (this.isFolder) {
        if (!this.isOpen) {
          this._openTheFolder()
          this._add()
        } else {
          if (this.isActive) {
            this._closeTheFolder()
            this._remove()
          } else {
            this._closeTheFolder()
          }
        }
      } else {
        if (this.isActive) {
          this._remove()
        } else {
          this._add()
        }
      }
    },
    changeToFolder: function() {
      // 文件转换成文件夹时，必定处于 *激活状态与打开状态*
      if (!this.isFolder) {
        this._fileToFolder()
        this._addChild()
        this._openTheFolder()
      }
      this._add()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
