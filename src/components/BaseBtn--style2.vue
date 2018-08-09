<template lang="pug">
  button.BaseBtn
    slot
</template>


<style scoped>
.BaseBtn {
  color: inherit;
  background: rgba(0,0,0,.2);
  border: .2rem solid rgba(0,0,0,.4);
  position: relative;
  text-align: center;
  vertical-align: center;
  height:100%;
}
.BaseBtn:hover {
  border: .2rem solid rgba(0,0,0,.4);
}

</style>


