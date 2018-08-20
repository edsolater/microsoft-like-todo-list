<template lang="pug">
  #app
    #nav
      router-link(to="/")  Home 
      | | 
      router-link(to="/todo")  Todo 
      | |
      router-link(to="/file-tree") FileTree
    router-view
    FontsBackground(style="z-index:-1;")
</template>

<script>
import FontsBackground from '@/components/FontsBackground'
export default {
  components:{
    FontsBackground
  }
}
</script>

<style>
.container {
  display: flex;
  /* background-color: rgba(0, 0, 0, 0.03); */
  padding: unset;
  margin: unset;
  min-width: 2rem;
  max-width: unset;
  width: unset;
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


#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
