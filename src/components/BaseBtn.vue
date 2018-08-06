<template lang="pug">
  button(
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
        // click: event => this.$emit('click'),/*对应父级的 v-model*/
      };
    }
  }
};
</script>

<style scoped>
button {
  color: inherit;
  background: transparent;
  border: none;
  position: relative;
  text-align: center;
  vertical-align: center;
  height:100%;
  line-height: 100%;
}
button:hover {
  background: rgba(0,0,0,.2)
}
button:hover::after {
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


