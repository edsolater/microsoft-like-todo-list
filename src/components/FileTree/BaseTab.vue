<template lang="pug">
  //-
    BaseTab--editable (无依赖)
    # 组成：
      一直显示的图标LeaderIcon(slot) + 一行文字Title + hover显示的图标TailerIcon(slot)

    #需要传参props: 
      （必须）title: 'some title',  // 关系到一行文字title
      （class）iscurent: false  // 关系到是否激活 ".iscurrent"
      （class）isopen: false  // 关系到是否打开

    # named slot：
      leader-icon(代表本条目) ———— default: <font-awesome-icon> 绑定item中的iconName
      tailer-icon(取消图标) ———— default: <font-awesome-icon-times>

    # 效果：
      :hover   ————透明黑色背景
      :active   ————3d 按下去的交互
      .iscurrent   ————左侧一条粗border、更重的透明黑色背景

    # CSS变量： 5个(可缺省)
      --hover-background-color
      --active-background-color
      --iscurrent-background-color
      --primary-color-1
      --secondary-color-1

  .BaseEditableTab(:class="{iscurrent,isopen}")
    .LeaderIcon
      slot(name="leader-icon")
        | ▶
    .Title {{title}}
    .TailerIcon
      slot(name="tailer-icon")
        div(style="font-size: 1.3rem") ×
    slot
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: `haven't title`
    },
    iscurrent: {
      type: Boolean,
      default: false
    },
    isopen: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
/* 本体 */
.BaseEditableTab {
  border-radius: 2px;
  overflow: hidden;
  transition: all 0.2s ease, background-color 1s ease;
  transform: perspective(8rem) translateZ(0rem);
  display: flex;
}
.BaseEditableTab::before {
  content: "";
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
  transform: perspective(20rem) translateZ(-0.1rem);
}
.BaseEditableTab:active::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--active-background-color, rgba(0, 0, 0, 0.274));
}
.BaseEditableTab.iscurrent {
  font-weight: bold;
  background: var(--iscurrent-background-color, rgba(0, 0, 0, 0.103));
}
.BaseEditableTab.iscurrent::before {
  height: 100%;
  opacity: 1;
}

/* 标签title */
.Title {
  margin-right: auto;
  background: transparent;
  cursor: default;
  border: none;
  font-size: inherit;
  font-weight: inherit;
  transition: all 100ms;
  pointer-events: none;
}
.BaseEditableTab:hover > .Title {
  margin-left: 0.5rem;
}

/* leader-icon */
.LeaderIcon {
  opacity: 0.5;
  transition: all 0.2s;
  pointer-events: none;
  margin-left: 1rem;
  margin-right: 1rem;
}
.BaseEditableTab:hover .LeaderIcon,
.BaseEditableTab.isopen .LeaderIcon,
.BaseEditableTab.iscurrent .LeaderIcon {
  opacity: 1;
}
.BaseEditableTab.isopen .LeaderIcon {
  transform: rotate(90deg);
}
.BaseEditableTab.iscurrent .LeaderIcon {
  color: var(--primary-color-1, rgb(26, 100, 173));
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
