<template lang="pug">
  .vertical-container.Tags
    .info Tags
    Tag.Tag(
      v-for="tag in tags"
      :key="tag.id"
      :tag="tag"
      @update:selectedTabID="$emit('update:selectedTabID', $event)"
    )
</template>

<script>
import Tag from "./Tags__Tag";


export default {
  components: {
    Tag
  },
  data() {
    return {
      todos: this.$root.todos,
      selectedTabID: this.$root.selectedTabID,
      tabs: this.$root.tabs,
    }
  },
  computed: {
    tags() {
      return this.$root.tabs.slice(0, 3)
    }
  },
  methods: {
    // event 传来的是 tag 对象
    deleteTag(tag) {
      const index = this.tabs.indexOf(tag)
      this.tabs.splice(index, 1)
    },
    updateSelectedTabID(newSelectedID) {
      this.$root.selectedTabID = newSelectedID
    },
  }
};
</script>