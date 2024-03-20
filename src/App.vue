<template>
  <PostsView />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PostsView from "./components/PostsView.vue";

@Options({
  components: {
    PostsView,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss"></style>
