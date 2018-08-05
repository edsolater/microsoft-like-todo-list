<template lang="pug">
  .container.Btngroup
    .info Btngroup
    button(
      v-if="selectedTabID === 0"
    ) hello
    button(
      v-if="selectedTabID === 2"
    ) world
</template>

<script>
export default {
  props: ['selectedTabID']
}
</script>

