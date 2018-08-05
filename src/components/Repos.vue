<template lang="pug">
  .vertical-container.Repostories
    .info Repos
    Repo.Repo(
      v-for="repo in repos"
      :key="repo.id"
      :repo="repo"
    )
    BtnAdd.BtnAdd
</template>

<script>
import Repo from "./Repos__Repo";
import BtnAdd from "./Repos__BtnAdd";

export default {
  components: {
    Repo,
    BtnAdd
  },
  data() {
    return {
      todos: this.$root.todos,
      selectedTabID: this.$root.selectedTabID,
      tabs: this.$root.tabs,
    }
  },
  computed: {
    repos() {
      return this.tabs.slice(3)
    }
  }
};
</script>
