<template lang="pug">
  .container.leaf.Tab(
    :class="{active: tab.index === selectedTabIndex}"
    @click="$emit('update:selectedTabIndex', tab.index)"
  )
   
    .container.icon
     
      font-awesome-icon(
        icon="sun"
        v-if="tab.index === 0"
      )
      font-awesome-icon(
        icon="star"
        v-if="tab.index === 1"
      )
      font-awesome-icon(
        icon="clipboard-check"
        v-if="tab.index === 2"
      )
      font-awesome-icon(
        icon="list"
        v-if="tab.index >= 3"
      )
    .container.title.flex-auto
     
      | {{tab.title}}
</template>


<script>
export default {
  props: ["tab", "selectedTabIndex"],
  data() {
    return {
      icon: {
        sun:  this.tab.index == 0,
        star: this.tab.index >= 1,
        // sun:  this.tab.index >= 2, 
        // "list-ul": this.tab.index >= 3,
      }
    }
  }
};
</script>

<style scoped>
.Tab {
  cursor: pointer;
  border-left: 5px solid transparent;
  border-radius: 2px;
  padding:20px;
}
.Tab:hover {
  background: rgba(32, 32, 68, .03)
}
.Tab.active {
  font-weight: bold;
  border-left-color: rgba(35, 112, 228, 0.788);
  background: rgba(32, 32, 68, .06);
}
.icon {
  color: dodgerblue;
}
</style>

