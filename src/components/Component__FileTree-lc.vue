<template lang="pug">
  //-
    FileTree-logic *recursive组件* *无依赖*
    #组成：
      li
        div(数据体)
          slot(name="style-component")
        ul(此处有递归终止条件)
          FileTreeItemLC(*自身*此处为递归体)

    **需要传参props: 
      model（必须）:{id:XXX, titleName:XXX} ———— *核心显示条目*关系到暴露出的style-component slot（给样式组件显示的传参）
      currentPath（必须）: ['当前', '的路径', '地址'] ———— 字符串形式方便操作

    **传出事件：
      update_path（重要） ———— store操作 payloade:{mode, id, level, abovePath}

    **named slot：
      style-component（样式组件） ———— 略

  li
    div(:class='{bold: isFolder}'
      @click='clickAction()')
      //- @dblclick='changeToFolder()'  // 这功能不实用
      slot(name="style-component"
        v-bind=`{
          title: model.titleName,
          isOpen: isOpen,
          isActive: isActive,
          isFolder: isFolder
        }`)
        div 必须传入 style-component
    ul(v-if='isOpen && isFolder')
      //- 递归自身
      FileTreeItemLC.FileTreeItemLC(v-for='(newModel, index) in model.children'
        :key='index'
        v-bind=`{
          model: newModel,
          currentPath}`
        v-on=`{
          update_path}`)
        template(slot="style-component" slot-scope="slotProps")
          slot(name="style-component"
            v-bind=`slotProps`)
            div 必须传入 style-component
      //- li.add(@click='_addChild()') +
</template>

<script>
/* eslint-disable */
import _ from 'lodash'

import TabSC from './TabSC'
export default {
  name: 'FileTreeItemLC',
  components: {
    TabSC
  },
  props: {
    model: {
      type: Object,
      required: true,
      default: {
        titleName: 'someString',
        id: 'uniqueId'
      }
    },
    currentPath: {
      type: Array,
      required: true
    }
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
      this.$emit('update_path', {
        mode: 'add',
        id: this.model.id,
        level: this.level,
        abovePath: this.abovePath
      })
    },
    _remove() {
      this.$emit('update_path', {
        mode: 'remove',
        id: this.model.id,
        level: this.level,
        abovePath: this.abovePath
      })
    },
    // _fileToFolder() {
    //   // create children
    //   // this.$set(this.model, 'children', [])
    //   this.$store.commit('CREATE_CHILDREN', {currentItem: this.model})
    // },
    _openTheFolder() {
      this.isOpen = true
    },
    _closeTheFolder() {
      this.isOpen = false
    },
    _toggleTheFolder() {
      this.isOpen = !this.isOpen
    },
    // _addChild: function() {
    //   this.model.children.push({
    //     titleName: 'new stuff',
    //     id: Date.now()
    //   })
    // },
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
    // changeToFolder: function() {
    //   // 文件转换成文件夹时，必定处于 *激活状态与打开状态*
    //   if (!this.isFolder) {
    //     this._fileToFolder()
    //     this._addChild()
    //     this._openTheFolder()
    //   }
    //   this._add()
    // }
    // 递归组件需要的传递事件
    update_path(event){
      this.$emit('update_path', event)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
