<template lang="pug">
  input.TabName(v-on="listeners"
  )
</template>

<script>
export default {
  props:{
    isEditable: {type:Boolean, default:false }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners
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
  color: blue;
  caret-color: transparent;
  user-select: none;
}
</style>
