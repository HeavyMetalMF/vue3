<template>
  <div>
    {{posts}}
  </div>
  <div class="post" v-for="post in posts">
    <div><strong>Name: </strong>{{post.title}}</div>
    <div><strong>Description: </strong>{{post.body}}</div>
  </div>
</template>

<script>
export default {
  name: "PostList",
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.post{
  padding: 15px;
  border: 3px solid teal;
  margin-top: 10px;
}
</style>