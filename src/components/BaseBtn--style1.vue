<template lang="pug">
  button.BaseBtn(v-on="listeners")
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
  background: transparent;
  border: none;
  position: relative;
  text-align: center;
  vertical-align: center;
  height: 100%;
}
.BaseBtn:hover::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  background-blend-mode: multiply;
}
</style>


