<template lang="pug">
.container
  .info Title
  p {{currentTitle}}
</template>

<script>
export default {
  props: ['currentTitle']
}
</script>
