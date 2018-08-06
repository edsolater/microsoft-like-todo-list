<template lang="pug">
  #app.container.text-center
    .Panel
      .container
        Profiles.Profiles.flex-auto
        BtnSearch.BtnSearch
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
import Profiles from "./components/Profiles";
import BtnSearch from "./components/BtnSearch";
import Tabs from "./components/Tabs";
// Workspace
import Header from "./components/Header";
import Todos from "./components/Todos";

export default {
  name: "app",
  components: {
    // Panel
    Profiles,
    BtnSearch,
    Tabs,
    // Workspace
    Header,
    Todos
  },
  data() {
    return {
      selectedTabIndex: 0,
      
    };
  },
  methods: {
    update_selectedTabIndex(newSelectedTabID) {
      this.selectedTabIndex = newSelectedTabID;
    }
  }
};
</script>

<style>
:root {
  --vue-blackblue: #2c3e50;
}

.container {
  position: relative;
  display: flex;
  /* background-color: rgba(0, 0, 0, 0.03); */
  padding: 0rem;
  margin: 0rem;
  min-width: 2rem;
  max-width: unset;
  width: unset;
  overflow: hidden;
  align-content: center;
}
.container.leaf {
  justify-content: center;
  align-items: center;
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
  color: var(--vue-blackblue);
}
.flex-auto {
  flex: auto;
}
hr {
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  margin: 1.5rem 1rem;
}
.todo-height {
  height: 50px;
}
.tab-height {
  height: 40px;
}
/* rules above are for easier layout */
* {
  box-sizing: border-box
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--vue-blackblue);
  overflow: hidden;
  height: 40em;
  max-width: 1000px;
  margin: 60px auto;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .1)
}
.Panel {
  width: 30vw;
}
.WorkSpace {
  width: 70vw;
  /* background: snow; */
  border-left: 1px solid lightgrey;
}
</style>
