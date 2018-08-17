<template lang="pug">
  input.TabName(
    v-on="listeners"
    :readonly="!isEditable"
  )
</template>

<script>
export default {
  props: {
    isEditable: { type: Boolean, default: false }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit('input-value', event.target.value)
      }
    }
  },
  watch: {
    isEditable(newVel) {
      if (newVel) {
        this.$el.focus()
      }
    }
  }
}
</script>

<style scoped>
.TabName {
  margin-right: auto;
  background: transparent;
  cursor: default;
  border: none;
  font-size: inherit;
  font-weight: inherit;
}
:read-only {
  caret-color: transparent;
  user-select: none;
}
::placeholder {
  color: slategray;
  font-style: italic;
}
</style>
