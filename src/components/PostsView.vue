<template>
  <div class="posts-wrapper">
    <div class="posts-search">
      <img src="../assets/search.png" />
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Filter by author..."
      />
    </div>
    <div class="posts">
      <PostCard :cardData="item" v-for="item in filtredData" :key="item.id" />
    </div>
  </div>
</template>

<script lang="ts">
import PostCard from "@/components/PostCard.vue";
import IAuthors from "@/types/IAuthors";
import IPost from "@/types/IPost";
import { computed, onMounted, ref } from "vue";
export default {
  name: "PostsView",
  components: { PostCard },
  setup() {
    const posts = ref<IPost[]>([]);
    const authors = ref<IAuthors[]>([]);
    const searchQuery = ref("");
    const postsWithAuthor = computed(() =>
      posts.value.map((post) => {
        return {
          ...post,
          author:
            authors.value.find((author) => author.id === post.userId)?.name ??
            "",
        };
      })
    );
    const filtredData = computed(() =>
      postsWithAuthor.value.filter((item) =>
        item.author.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    );

    async function loadPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      posts.value = await response.json();
    }

    async function loadAuthors() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      authors.value = await response.json();
      console.log(authors.value);
    }

    onMounted(() => {
      loadPosts();
      loadAuthors();
    });

    return { filtredData, searchQuery };
  },
};
</script>

<style lang="scss" scoped>
.posts-wrapper {
  background-color: #ecf1f7;
  padding: 20px;
  & .posts-search {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    & img {
      width: 21px;
      height: 21px;
      background-color: #fff;
      border: 1px solid #e1e2e4;
    }
    & input {
      padding: 3px 5px;
      border: 1px solid #e1e2e4;
      border-radius: 2px;
      &:focus {
        outline: none;
      }
    }
  }
  & .posts {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }
}
</style>
