<template lang="pug">
  .vertical-container.Panel
    .info The Panel
    .container
      Profiles.Profiles
      BtnSearch.BtnSearch
    Tabs.Tabs
    Repositories.Repositories
</template>

<script>
import Profiles from "./Panel__Profiles"
import BtnSearch from "./Panel__BtnSearch"
import Tabs from "./Panel__Tabs"
import Repositories from "./Panel__Repositories"

export default {
  components: {
    Profiles,
    BtnSearch,
    Tabs,
    Repositories,
  },
}
</script>
