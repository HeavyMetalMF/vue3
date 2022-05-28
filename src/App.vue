<template>
  <div class="app">
    <form>
      <h4>Creating posts</h4>
      <input class="post_input" type="text" placeholder="title" v-bind:value="title">
      <input class="post_input" type="text" placeholder="description" v-bind:value="body">
      <button @click="createPost">Create post</button>
    </form>
    <div class="post" v-for="post in posts">
      <div><strong>{{post.title}}: </strong>{{post.body}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
      posts: [
        {id: 1, title: 'description1', body: 'Post number 1'},
        {id: 2, title: 'description2', body: 'Post number 2'},
        {id: 3, title: 'description3', body: 'Post number 3'},
      ],
      title: '',
      body: '',
    }
  },
  methods:{
    createPost(){

    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app{
  padding: 20px;
}
.post{
  padding: 15px;
  border: 3px solid teal;
  margin-top: 10px;
}
.post_input{
  width: 100%;
  padding: 10px 15px;
  margin-top: 10px;
  border: 1px solid teal;
}
</style>