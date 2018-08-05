<template lang="pug">
  #app.container
    .info Virtual-App
    .vertical-container.Panel
      .info The Panel
      .container
        Profiles.Profiles
        BtnSearch.BtnSearch
      Tabs.Tabs
    .vertical-container.WorkSpace
      .info Virtual-workspace
      Header.Header
      TodoList.TodoList
      Bar.Bar
</template>

<script>
// Panel
import Profiles from './components/Profiles'
import BtnSearch from './components/BtnSearch'
import Tabs from './components/Tabs'
import Repositories from './components/Repositories'
// Workspace
import Header from './components/Header'
import TodoList from './components/TodoList'
import Bar from './components/Bar'

export default {
  name: 'app',
  components: {
    // Panel
    Profiles,
    BtnSearch,
    Tabs,
    Repositories,
    // Workspace
    Header,
    TodoList,
    Bar,
  }
}
</script>

<style>
:root {
  --vue-blackblue: #2c3e50;
}

.container,
.vertical-container {
  position: relative;
  display: flex; 
  background-color: rgba(0, 0, 0, 0.1);
  padding: 0.8rem;
  margin: 0.2rem;
  min-width: 2rem;
}
.vertical-container {
  flex-direction: column;
}

/* try not use this */
/* .container-fluid { */
  /* width: 100%; */
/* } */
.info {
  position: absolute;
  left: 0;
  top: 0;
  font-size: 0.8rem;
  color: var(--vue-blackblue);
}
.justify-content-between {
  justify-content: space-between;
}
.justify-content-center {
  justify-content: center;
}
.align-items-center {
  align-items: center;
}
.align-items-end {
  align-items: end;
}
hr {
    border: none;
    border-top: 1px solid rgba(0, 0, 0, .3);
    margin: 1rem .5rem;
}
/* rules above are for easier layout */


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ddd;
  margin-top: 60px;
}
.Panel {
  flex: 30%;
}
.WorkSpace {
  flex: 70%;
  background: lightskyblue;
}
</style>
