<template lang="pug">
  input.form-control.BaseInput(
    :value="value"/*对应父级的 v-model*/ 
    v-on="listeners"
  )
</template>

<script>
export default {
  props: ['value'],/*对应父级的 v-model*/ 
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value),/*对应父级的 v-model*/ 
      }
    }
  }
}
</script>

<style scoped>
/* TODO: 需要有一定的控件的动画效果 */
.BaseInput {
  
  
}
</style>

