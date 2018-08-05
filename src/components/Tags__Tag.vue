<template lang="pug">
  .container.Tag
    .info Tag: {{tag.id}}
    .container.icon
      .info icon
    .container.title.flex-auto(
      @click="$emit('update:selectedTabID', tag.id)"
    )
      .info title
      | {{tag.title}}
</template>

<script>
export default {
  props: ["tag"],
};
</script>
