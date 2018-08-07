<template lang="pug">
  .container.Btngroup
    Btn.Btn1(
      v-if="selectedTabIndex === 0"
    ) hello
    Btn.Btn2(
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

