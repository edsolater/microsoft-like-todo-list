<template lang="pug">
  //- 阻止右键菜单
  #Todo.container(
    @click=`
      if ($store.state.hasDropdown) {
        CANCEL_DROPDOWN()
      }
    `
    @contextmenu.prevent
  )
    .Panel
      .UploadPanel
        BaseBtn.Uploadbutton(
          @click="upload_data"
        )
      .Profiles-and-searchBtn.container
        Profiles.Profiles
        SearchBtn.SearchBtn
      Tabs.Tabs
    .WorkSpace
      Header.Header
      Todos.Todos
</template>

<script>
//第一次请求如何让vue在数据来之前不要渲染呢？暂时在一开始就设置默认值解决
import BaseBtn from '@/components/todo/BaseBtn--upload'
// .Panel
import Profiles from '@/components/todo/Profiles'
import SearchBtn from '@/components/todo/SearchBtn'
import Tabs from '@/components/todo/Tabs'
// .Workspace
import Header from '@/components/todo/Header'
import Todos from '@/components/todo/Todos'
import { mapMutations } from 'vuex'

export default {
  components: {
    BaseBtn,
    // .Panel
    Profiles,
    SearchBtn,
    Tabs,
    // .Workspace
    Header,
    Todos
  },
  mounted() {
    this.$store.dispatch('download_data')
  },
  methods: {
    ...mapMutations(['CANCEL_DROPDOWN']),
    upload_data() {
      this.$store.dispatch('upload_data')
    },
    switch_hasIcon() {
      this.hasIcon = !this.hasIcon
    }
  }
}
</script>

<style>
@import url('../assets/animate.css');

.container {
  display: flex;
  /* background-color: rgba(0, 0, 0, 0.03); */
  padding: unset;
  margin: unset;
  min-width: 2rem;
  max-width: unset;
  width: unset;
  align-content: center;
}
.container.hv-center {
  justify-content: center;
  align-items: center;
}
.container.h-center {
  justify-content: center;
}
.container.v-center {
  align-items: center;
}
.container.vertical {
  flex-direction: column;
}

.relative {
  position: relative;
}
.info {
  display: none;
  position: absolute;
  left: 0;
  top: 0;
  font-size: 0.8rem;
  color: var(--text-color);
}
.flex-auto {
  flex: auto;
}

/* rules above are for easier layout */
*,
*::before,
*::after {
  box-sizing: border-box;
  outline: none;
}
/* mozilla 去除按钮边框 */
button::-moz-focus-inner {
  border: none;
}


:root {
  --text-color: #2c3e50;
  --link-color: blue;
  --line-color: lightgrey;
  --hover-background: rgba(32, 32, 68, 0.03);
  --disabled-color: var(--line-color);
  --shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);

  --profiles-and-searchBtn-height: 60px;
  --App-height: 550px;
  --Header-height: 200px;
  --todo-padding: 0 20px;
  --todo-height: 50px;
  --tab-height: 40px;
  --tab-padding: 0 10px;
  --icon-width: 48px;
}
#Todo {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
  position: relative;
  overflow: hidden;
  height: var(--App-height);
  max-width: 1000px;
  margin: 60px auto;
  box-shadow: var(--shadow);
  cursor: default;
  user-select: none;
}
.UploadPanel {
  position: absolute;
  left: 10%;
  top: -2.8rem;
  width: 7rem;
  height: 4rem;
  overflow: hidden;
  z-index: 1;

  transition: top 0.2s, background-color 0.5s;
  background: rgba(11, 167, 11, 0.267);
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
}
.UploadPanel:hover {
  top: -2%;
  background-color: rgba(9, 82, 9, 0.322);
}
.Panel {
  width: 30vw;
}
.Profiles-and-searchBtn {
  height: var(--profiles-and-searchBtn-height);
  box-shadow: var(--shadow);
  justify-content: space-between;
  align-items: center;
  padding: var(--tab-padding);
}
.Tabs {
  height: calc(var(--App-height) - var(--profiles-and-searchBtn-height));
}
hr {
  border: none;
  border-top: 1px solid var(--line-color);
  margin: 1.5rem 1rem;
}
.WorkSpace {
  width: 70vw;
  height: 100%;
  border-left: 1px solid var(--line-color);
}
.Header {
  clear: both;
  height: var(--Header-height);
  width: 100%;
  box-shadow: var(--shadow);
}
.Todos {
  width: 100%;
  height: calc(var(--App-height) - var(--Header-height));
}
</style>
