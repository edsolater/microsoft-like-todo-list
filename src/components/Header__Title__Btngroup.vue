<template lang="pug">
  .container.Btngroup
    Btn.Btn(
      v-if="selectedTabIndex === 0"
    ) hello
    Btn.Btn(
      v-if="selectedTabIndex === 2"
    ) world
</template>

<script>
import Btn from './BaseBtn.vue'

export default {
  components: {
    Btn,
  },
  props: ['selectedTabIndex'],
}
</script>

