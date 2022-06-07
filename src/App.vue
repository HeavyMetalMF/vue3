<template>
  <div class="app">
    <div class="app__btns">
      <Button @click="showDialog">Создать пост</Button>
      <MySelect v-model="selectedSort" :options="sortOptions"/>
    </div>
    <MyDialog v-model:show="dialogVisible" >
      <PostForm @create="createPost" title="props.title"/>
    </MyDialog>
    <PostList v-if="!isLoading" v-bind:posts="sortedPosts" @remove="removePost" />
    <div v-else >LOADING............</div>
    <Button @click="fetchPosts"> asdsadas</Button>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from "axios";
import Button from "@/components/UI/Button";
import MySelect from "@/components/UI/MySelect";
export default {
  components: {
    MySelect,
    Button,
    PostForm,
    PostList
  },
  name: "App",
  data(){
    return {
      posts: [],
      dialogVisible: false,
      isLoading: false,
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'},
      ]
    }
  },
  methods:{
     createPost(post){
       this.posts.push(post);
       this.dialogVisible = false;
    },
    removePost(post){
       this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog(){
      this.dialogVisible = true;
    },
    async fetchPosts(){
       try {
         this.isLoading = true;
         const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
         this.posts = response.data;
         console.log(response)
       }catch (e) {
         alert('Error')
       }finally {
         this.isLoading = false;
       }
    }
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts(newValue) {
      return [...this.posts].sort((a, b) => a[this.selectedSort]?.localeCompare(b[this.selectedSort]))
    }
  },
  watch: {
    // selectedSort(newValue) {
    //   this.posts.sort((a, b) => {
    //     return a[newValue].localeCompare(b[newValue])
    //   })
    //   console.log(this.posts)
    // },
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
.app__btns{
  display: flex;
  justify-content:space-between;
}
</style>