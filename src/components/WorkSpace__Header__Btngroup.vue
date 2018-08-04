<template lang="pug">
  .container.Btngroup
    .info Btngroup
    BtnDetail.BtnDetail
    Dropdown.Dropdown
</template>

<script>
import BtnDetail from "./WorkSpace__Header__Btngroup__BtnDetail"
import Dropdown from "./WorkSpace__Header__Btngroup__Dropdown"

export default {
  components: {
    BtnDetail,
    Dropdown,
  },
}
</script>
