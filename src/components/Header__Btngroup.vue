<template lang="pug">
  .container.Btngroup
    .info Btngroup
    BtnDetail.BtnDetail
    Dropdown.Dropdown
</template>

<script>
import BtnDetail from "./Header__Btngroup__BtnDetail"
import Dropdown from "./Header__Btngroup__Dropdown"

export default {
  components: {
    BtnDetail,
    Dropdown,
  },
}
</script>
