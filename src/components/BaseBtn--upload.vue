<template lang="pug">
  button.BaseBtn(
    v-on="listeners"
  )
    div.text 上传所有数据
    font-awesome-icon(icon="upload")
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
  position:absolute;
  margin-top: auto;
  width:100%;
  bottom:0.2rem;
  color: white;
  background: transparent;
  border: none;
}
.text {
  margin-bottom: .4rem;
}

</style>


