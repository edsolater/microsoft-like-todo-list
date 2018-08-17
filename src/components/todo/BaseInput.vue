<template lang="pug">
  input.BaseInput(
    :value="value"/*传承父级的 v-model*/ 
    v-on="listeners"
  )
</template>

<script>
export default {
  props: {
    value: {
      type:String,
      default: 'value displayError'
    }
  } /*传承父级的 v-model*/,
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event =>
          this.$emit('input', event.target.value) /*传承父级的 v-model*/,
      }
    },
  },
}
</script>

<style>
.BaseInput {
  width: 100%;
  border: none;
}
</style>

