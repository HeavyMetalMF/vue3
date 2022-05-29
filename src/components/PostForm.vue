<template>
  <form @submit.prevent>
    <h4>Creating posts</h4>
    <input class="post_input" type="text" placeholder="title" v-bind:value="title" @input="title = $event.target.value">
    <input class="post_input" type="text" placeholder="description" v-bind:value="body" @input="body = $event.target.value">
    <button @click="createPost">Create post</button>
  </form>
</template>

<script>
export default {
  name: "PostForm",
}
</script>

<style scoped>
.post_input{
  width: 100%;
  padding: 10px 15px;
  margin-top: 10px;
  border: 1px solid teal;
}
</style>