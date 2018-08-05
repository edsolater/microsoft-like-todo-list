<template lang="pug">
  .container.BtnAdd
    .info BtnAdd
    button(
      @click="$emit('create:repo')"
    ).btn add a new reo
</template>

<style>
/* TODO: 默认UI太丑了，美化它！ */
.btn {
  border:none;
}
</style>
