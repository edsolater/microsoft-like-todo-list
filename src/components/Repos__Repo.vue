<template lang="pug">
  .container.Repo
    .info Repo: {{repo.id}}
    .container.icon
      .info icon
    .container.title.flex-auto
      .info title
      | {{repo.title}}
</template>

<script>
export default {
  props:['repo']
}
</script>

