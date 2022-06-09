<template>
<!--  v-show="posts.length > 0" -->
  <div v-if="posts.length > 0">
    <h3>List of users</h3>
    <transition-group name="list">
      <PostItem v-for="post in posts" v-bind:post="post" v-bind:key="post.id" @remove="$emit('remove', post)" />
    </transition-group>
  </div>
  <!--  v-show="posts.length = 0" -->
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
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}
.list-move {
  transition: transform 0.8s ease;
}
</style>