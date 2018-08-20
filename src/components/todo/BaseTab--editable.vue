<template lang="pug">
  //-
    BaseTab--editable (无依赖)
    --- 自身需要在包裹器上附加 ".iscurrent" 以显示激活样式效果
    --- 关于input控制：通过props:item.isEditable 的布尔值控制(watch监视)是否显示caret

    # 组成：
      一直显示的图标LeaderIcon(slot) + 一行文字Title + hover显示的图标TailerIcon(slot)

    # 需要接听的事件： 1个
      @input:value(newTitle) -- 内部（一行文字Title）内容改变时触发

    # 需要传参props:  1个
      item:{
        title: 'some title',  // 关系到一行文字title
        isEditable: true,  // 关系到一行文字是否处于可编辑状态
      }

    # named slot： 2个
      leader-icon(代表本条目) ———— default: <font-awesome-icon> 绑定item中的iconName
      tailer-icon(取消图标) ———— default: <font-awesome-icon-times>

    # 效果： 3种
      :hover   ————透明黑色背景
      :active   ————3d 按下去的交互
      .active   ————左侧一条粗border、更重的透明黑色背景

    # CSS变量： 5个(可缺省)
      --hover-background-color
      --active-background-color
      --iscurrent-background-color
      --primary-color-1
      --secondary-color-1

  .BaseEditableTab
    //- 让它有普通CSS过渡就不能突然出现，而是透明化处理
    .ActiveBlack
    .LeaderIcon.container.hv-center
      slot(name="leader-icon")
        | ▶
    input.Title(
      :readonly="!item.isEditable"
      :placeholder="'未命名'"
      :value="item.title"
      @input="$emit('input:value', $event.target.value)"
      @keydown.enter.prevent="item.isEditable=false"
      @blur="item.isEditable=false"
    )
    .TailerIcon.container.hv-center
      slot(name="tailer-icon")
        div(style="font-size: 2rem") ×
    slot
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({
        title: 'some title', // 关系到一行文字title
        isEditable: true // 关系到一行文字是否处于可编辑状态
      })
    }
  },
  computed: {
    isEditable: vm => vm.item.isEditable
  },
  watch: {
    isEditable(newVel) {
      if (newVel) {
        this.$el.querySelector('input').focus()
      }
    }
  },
  mounted() {
    this.$el.querySelector('input').focus()
  }
}
</script>

<style scoped>
/* 本体 */
.BaseEditableTab {
  height: 100%;
  border-radius: 2px;
  overflow: hidden;
  transition: all 0.2s ease, background-color 1s ease;
  transform: perspective(8rem) translateZ(0rem);
}
.BaseEditableTab > .ActiveBlack {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  transition: background-color 0.2s ease;
  z-index: -1;
}
.BaseEditableTab::before {
  content: '';
  opacity: 0;
  position: absolute;
  left: 0;
  height: 0;
  width: 0.3rem;
  background-color: var(--primary-color-1, dodgerblue);
  transition: all 0.1s ease;
}
.BaseEditableTab:hover {
  background-color: var(--hover-background-color, rgba(32, 32, 68, 0.03));
  transition: all 0.2s ease, background-color 0;
}
.BaseEditableTab:active {
  transform: perspective(8rem) translateZ(-0.2rem);
}
.BaseEditableTab:active > .ActiveBlack {
  display: block;
  background-color: var(--active-background-color, rgba(0, 0, 0, 0.274));
}
.BaseEditableTab.iscurrent {
  font-weight: bold;
  background-color: var(--iscurrent-background-color, rgba(0, 0, 0, 0.103));
}
.BaseEditableTab.iscurrent::before {
  height: 100%;
  opacity: 1;
}

/* 标签title */
input.Title {
  margin-right: auto;
  background: transparent;
  cursor: default;
  border: none;
  font-size: inherit;
  font-weight: inherit;
  pointer-events: none;
  transition: all 100ms;
}
.BaseEditableTab:hover > input.Title {
  margin-left: 0.5rem;
}
input.Title::placeholder {
  color: darkslategray;
  font-style: italic;
}
input.Title:read-only {
  caret-color: transparent;
  user-select: none;
}

/* leader-icon */
.LeaderIcon {
  width: 2.5rem;
  opacity: 0.5;
  transition: all 0.2s;
  pointer-events: none;
}
.BaseEditableTab:hover .LeaderIcon,
.BaseEditableTab.iscurrent .LeaderIcon {
  opacity: 1;
}

/* tailer-icon */
.TailerIcon {
  width: 2.5rem;
  color: var(--secondary-color-1, rgb(175, 175, 175));
  position: absolute;
  right: 0;
  display: none;
}
.BaseEditableTab:hover > .TailerIcon {
  display: inline;
}
.TailerIcon:hover {
  color: crimson;
}
</style>
