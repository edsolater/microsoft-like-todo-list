<template lang="pug">
  .vertical-container.Repostories
    .info Repostories
    List.List
    hr
    BtnAdd.BtnAdd
</template>

<script>
import List from './Repositories__List'
import BtnAdd from './Repositories__BtnAdd'

export default {
  components: {
    List,
    BtnAdd,
  },
}
</script>
