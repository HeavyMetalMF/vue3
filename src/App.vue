<template>
  <div class="app">
    <PostForm/>
    <PostList vbi/>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
export default {
  components: {
    PostForm,
    PostList
  },
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
    createPost(event){
      const newPost = {
        id: Date.now(),
        title: this.title,
        body : this.body,
      }
      this.posts.push(newPost)
      this.title = ''
      this.body = ''
    },
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
</style>