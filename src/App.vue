<template>
  <div class="app">
    <div class="app__btns">
      <Button @click="showDialog">Создать пост</Button>
      <Input type="text" placeholder="search posts" v-model="searchPosts"/>
      <MySelect v-model="selectedSort" :options="sortOptions"/>
    </div>
    <MyDialog v-model:show="dialogVisible" >
      <PostForm @create="createPost" title="props.title"/>
    </MyDialog>
    <PostList v-if="!isLoading" v-bind:posts="searchedAndSortedPosts" @remove="removePost" />
    <div v-else >LOADING............</div>
    <div class="page__wrapper">
      <div :class="{'current__page': page === pageNumber}" class="page" v-for="pageNumber in totalPage" :key="pageNumber" @click="changePage(pageNumber)"> {{pageNumber}} </div>
    </div>
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
      ],
      searchPosts: '',
      page: 1,
      limit: 5,
      totalPage: 0,
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
         const response = await axios.get('https://jsonplaceholder.typicode.com/posts?', {
           params: {
             _page: this.page,
             _limit: this.limit
           }
         });
         this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit);
         this.posts = response.data;
         console.log(response)
       }catch (e) {
         alert('Error')
       }finally {
         this.isLoading = false;
       }
    },
    changePage(pageNumber) {
       this.page = pageNumber;
    }
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts(newValue) {
      return [...this.posts].sort((a, b) => a[this.selectedSort]?.localeCompare(b[this.selectedSort]));
    },
    searchedAndSortedPosts() {
      return this.sortedPosts.filter(post => post.title.includes(this.searchPosts));
    }
  },
  watch: {
    page() {
      this.fetchPosts();
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
.app__btns{
  display: flex;
  justify-content:space-between;
}
.page__wrapper{
  display: flex;
  margin-top: 15px;
}
.page{
  border: 1px solid black;
  margin-right: 5px;
  padding: 5px;
}
.current__page{
  border: 2px solid teal;
}
</style>