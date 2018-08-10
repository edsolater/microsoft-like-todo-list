<template lang="pug">
  #app.container(
    @click="say"
  )
    .Panel
      .container.Profiles-and-searchBtn
        Profiles.Profiles
        SearchBtn.SearchBtn
      Tabs.Tabs(
        :selectedTabIndex="selectedTabIndex"
        @update:selectedTabIndex="update_selectedTabIndex"
      )
    .WorkSpace
      Header.Header(
        :selectedTabIndex="selectedTabIndex"
      )
      Todos.Todos(
        :selectedTabIndex="selectedTabIndex"
      )
</template>

<script>
// Panel
import Profiles from './components/Profiles'
import SearchBtn from './components/SearchBtn'
import Tabs from './components/Tabs'
// Workspace
import Header from './components/Header'
import Todos from './components/Todos'

export default {
  name: 'App',
  components: {
    // Panel
    Profiles,
    SearchBtn,
    Tabs,
    // Workspace
    Header,
    Todos
  },
  data() {
    return {
      selectedTabIndex: 0,
      hasDropdown: this.GLOBAL.hasDropdown
    }
  },
  methods: {
    update_selectedTabIndex(newSelectedTabID) {
      this.selectedTabIndex = newSelectedTabID
    },
    say(){
      console.log('hello from APP')
      this.GLOBAL.hasDropdown = false
    }
  }
}
</script>

<style>
:root {
  --text-color: #2c3e50;
  --link-color: blue;
  --line-color: lightgrey;
  --hover-background: rgba(32, 32, 68, 0.03);
  --disabled-color: var(--line-color);

  --profiles-and-searchBtn-height: 60px;
  --App-height: 550px;
  --Header-height: 200px;
  --todo-padding: 0 20px;
  --todo-height: 50px;
  --tab-height: 40px;
  --tab-padding: 0 10px;
  --icon-width: 48px;
}

.container {
  display: flex;
  /* background-color: rgba(0, 0, 0, 0.03); */
  padding: unset;
  margin: unset;
  min-width: 2rem;
  max-width: unset;
  width: unset;
  overflow: hidden;
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

.position-absolute {
  top: 0;
  left: 0;
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
  overflow: hidden;
  position: relative;
  height: var(--App-height);
  max-width: 1000px;
  margin: 60px auto;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
  cursor: default;
}
.Panel {
  width: 30vw;
}
.Profiles-and-searchBtn {
  height: var(--profiles-and-searchBtn-height);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
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
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
.Todos {
  width: 100%;
  height: calc(var(--App-height) - var(--Header-height));
}
</style>
