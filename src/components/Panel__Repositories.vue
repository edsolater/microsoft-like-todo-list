<template lang="pug">
  .vertical-container.Repostories
    .info Repostories
    List.List
    hr
    BtnAdd.BtnAdd
</template>

<script>
import List from './Panel__Repositories__List'
import BtnAdd from './Panel__Repositories__BtnAdd'

export default {
  components: {
    List,
    BtnAdd,
  },
}
</script>
