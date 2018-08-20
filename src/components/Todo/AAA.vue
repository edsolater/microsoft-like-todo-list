<template lang="pug">
  //- 阻止右键菜单
  #Todo.container(
    @click=`
      if ($store.state.Todo.hasDropdown) {
        HIDE_DROPDOWN()
      }
      if ($store.state.Todo.hasDropdown2) {
        HIDE_DROPDOWN2()
      }`
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
import BaseBtn from './BaseBtn--upload'
// .Panel
import Profiles from './Profiles'
import SearchBtn from './SearchBtn'
import Tabs from './Tabs'
// .Workspace
import Header from './Header'
import Todos from './Todos'
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
    ...mapMutations(['HIDE_DROPDOWN','HIDE_DROPDOWN2']),
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
@import url('../../assets/animate.css');

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
  background:rgba(223, 225, 226, 0.534);
  background-blend-mode: multiply;

  --text-color: #2c3e50;
  --link-color: blue;
  --line-color: lightgrey;
  --hover-background-color: rgba(32, 32, 68, 0.03);
  --active-background-color: rgba(0, 0, 0, 0.103);
  --iscurrent-background-color: rgba(0, 0, 0, 0.103);
  --primary-color-1: rgb(27, 115, 173);
  --primary-color-2: rgb(175, 175, 175);
  --secondary-color-1: rgb(175, 175, 175);
  --secondary-color-2: rgb(175, 175, 175);
  --disabled-color: var(--line-color);
  --shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);

  --profiles-and-searchBtn-height: 60px;
  --App-height: 550px;
  --Header-height: 200px;
  --todo-padding: 0 20px;
  --todo-height: 50px;
  --tab-height: 40px;
  --tab-padding: 0 10px;
  --icon-width: 2.5rem;
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
