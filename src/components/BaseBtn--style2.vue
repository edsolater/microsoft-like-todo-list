<template lang="pug">
  button.BaseBtn(
    v-on="listeners"
  )
    slot
</template>

<script>
export default {
  computed: {
    listeners() {
      return {
        ...this.$listeners
      }
    }
  }
}
</script>
<style scoped>
.BaseBtn {
  color: inherit;
  background: rgba(0,0,0,.2);
  border:.2rem solid transparent;
  position: relative;
  text-align: center;
  vertical-align: center;
  height:100%;
}
.BaseBtn:hover {
  border: .2rem solid rgba(0,0,0,.4);
}

</style>


