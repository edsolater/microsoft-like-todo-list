<template lang="pug">
  .vertical-container.Header
    .info Header
    .container.align-items-end.justify-content-between
      Title.Title
      Btngroup.Btngroup
    SortBar.SortBar
</template>

<script>
import Title from "./Header__Title"
import Btngroup from "./Header__Btngroup"
import SortBar from "./Header__SortBar"

export default {
  components: {
    Title,
    Btngroup,
    SortBar,
  },
}
</script>


<style scoped>
.Header {
  background: linear-gradient(to right, mediumslateblue, dodgerblue);
}
.SortBar {
  height: 1.5rem;
}
</style>


