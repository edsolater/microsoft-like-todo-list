<template lang="pug">
  button.BaseBtn
    slot
</template>

<script>
export default {
  computed: {
    listeners() {
      return {
        ...this.$listeners
        // click: event => this.$emit('click'),/*对应父级的 v-model*/
      };
    }
  }
};
</script>

<style scoped>
.BaseBtn {
  color: inherit;
  background: transparent;
  border: none;
  position: relative;
  text-align: center;
  vertical-align: center;
  height:100%;
}
.BaseBtn:hover {
  background: rgba(0,0,0,.15)
}
.BaseBtn:hover::after {
  content: "";
  position:absolute;
  top: 0;
  left: 0;
  width:100%;
  height:100%;
  background: rgba(0,0,0,.1);
  background-blend-mode: multiply;
}
</style>


