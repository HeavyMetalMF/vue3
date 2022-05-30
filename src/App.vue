<template>
  <div class="app">
    <PostForm @create="createPost" title="props.title"/>
    <PostList v-bind:posts="posts" @remove="removePost" />
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
    }
  },
  methods:{
     createPost(post){
      this.posts.push(post)
      console.log(post)
    },
    removePost(post){
       this.posts = this.posts.filter(p => p.id !== post.id)
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
</style>