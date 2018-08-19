<template lang="pug">
  //-
    BaseTab--editable (无依赖)
    组成：图标Icon + 一行文字Title
    自身需要在包裹器上附加 ".active" 以显示激活样式效果
    props: 

    item:{
      iconName: '<font-awesome-icon-name>',  // 关系到图标Icon
      title: 'some title',  // 关系到一行文字title
      isEditable: true,  // 关系到一行文字是否处于可编辑状态
      themes:{
        colorName: '<CSS-colorName>'  // 关系到图标Icon的color
      }
    }

    效果：
    :hover   ————透明黑色背景
    :active   ————3d 按下去的交互
    .active   ————左侧一条粗border、更重的透明黑色背景

  .BaseEditableTab
    .Icon.container.hv-center
      font-awesome-icon(
        :icon="item.iconName"
        :style="{color:item.themes.colorName}"
      )
    input.Title(
      :readonly="!item.isEditable"
      :placeholder="'未命名'"
      :value="item.title"
      @input="$emit('input:value', $event.target.value)"
      @keydown.enter.prevent="$emit('cancel:editting')"
      @blur="item.isEditable=false"
     )
    slot
</template>

<script>

export default {
  props: {
    item: {
      type:Object,
      default:{
        iconName: '<font-awesome-icon-name>',  // 关系到图标Icon
        title: 'some title',  // 关系到一行文字title
        isEditable: true,  // 关系到一行文字是否处于可编辑状态
        themes:{
          colorName: '<CSS-colorName>'  // 关系到图标Icon的color
        }
      }
    }
  },
  computed: {
    isEditable: vm => vm.item.isEditable
  },
  watch: {
    isEditable(newVel) {
      if (newVel) {
        this.$el.children[1].focus()
      }
    }
  }
}
</script>

<style scoped>
/* 本体 */
.BaseEditableTab {
  height: 100%;
}
.BaseEditableTab {
  border-left: 5px solid transparent;
  border-radius: 2px;
  padding: var(--tab-padding);
  transition: all 0.2s ease, background-color 1s ease;
  transform: perspective(8rem) translateZ(0rem);
}
.BaseEditableTab:hover {
  background: var(--hover-background);
  transition: all 0.2s ease, background-color 0s ease;
}
.BaseEditableTab:active {
  background-color: rgba(0, 0, 0, 0.1);
  border-left-color: rgba(14, 66, 145, 0.788);
  transform: perspective(8rem) translateZ(-0.5rem);
}
.BaseEditableTab.active {
  font-weight: bold;
  border-left-color: rgba(35, 112, 228, 0.788);
  background: rgba(32, 32, 68, 0.06);
}
/* 头部icon */
.Icon {
  width: var(--icon-width);
}
/* 标签title */
.Title {
  margin-right: auto;
  background: transparent;
  cursor: default;
  border: none;
  font-size: inherit;
  font-weight: inherit;
}
input.Title::placeholder {
  color: slategray;
  font-style: italic;
}
input.Title:read-only {
  caret-color: transparent;
  user-select: none;
}
</style>
