<template lang="pug">
  #app
    img(src="./assets/logo.png")
    Panel.Panel
    WorkSpace.WorkSpace
</template>

<script>
import Panel from './components/Panel.vue'
import WorkSpace from './components/WorkSpace.vue'

export default {
  name: 'app',
  components: {
    Panel,
    WorkSpace
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
  color: black;
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


.Panel {
  flex: 30%;
}
.WorkSpace {
  flex: 70%;
  background: lightskyblue;
}
</style>
