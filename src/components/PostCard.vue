<template>
  <div class="post-card">
    <h3 class="post-card--title">{{ cardData?.title }}</h3>
    <p class="post-card--body">{{ cardData?.body }}</p>
    <p class="post-card--author">{{ cardData?.author }}</p>
  </div>
</template>

<script lang="ts">
import IPost from "@/types/IPost";
import { PropType } from "vue";

export default {
  name: "PostCard",
  props: {
    cardData: {
      type: Object as PropType<IPost & { author: string }>,
    },
  },
};
</script>

<style scoped lang="scss">
.post-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 10px;
  padding: 20px;
  flex: 0 0 30%;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  min-width: 232px;
  &--title {
    color: #5799e6;
  }
  &--author {
    color: #e1e2e4;
  }
}

@media (max-width: 768px) {
  .post-card {
    flex: 0 0 40%;
  }
}
</style>
