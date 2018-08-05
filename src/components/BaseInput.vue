<template lang="pug">
  input.BaseInput(
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
.BaseInput {
  background: transparent;
  border: 1px solid var(--vue-blackblue)
}
</style>

