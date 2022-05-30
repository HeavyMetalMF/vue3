<template>
  <div v-if="posts.length > 0">
    <h3>List of users</h3>
    <PostItem v-for="post in posts" v-bind:post="post" v-bind:key="post.id" @remove="$emit('remove', post)" />
  </div>
  <h2 v-else style="color: red">Empty</h2>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  components: {
    PostItem
  },
  name: "PostList",
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>