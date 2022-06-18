<template>
  <div>
    <router-link to="/uuu">asdasd</router-link>
    <h1>STORE POSTS</h1>
    <div class="app__btns">
      <Button @click="showDialog">Создать пост</Button>
      <Input type="text" placeholder="search posts" :modelValue="searchPosts" @update:modelValue="setSearchPosts" v-focus/>
      <MySelect :modelValue="selectedSort" @update:modelValue="setSelectedSort" :options="sortOptions"/>
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
import Button from "@/components/UI/Button";
import MySelect from "@/components/UI/MySelect";
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex';
export default {
  components: {
    MySelect,
    Button,
    PostForm,
    PostList
  },
  // name: "App",
  data(){
    return {
      dialogVisible: false,
    }
  },
  methods:{
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchPosts: 'post/setSearchPosts',
      setSelectedSort: 'post/setSelectedSort'
    }),
    ...mapActions({
      fetchPosts: 'post/fetchPosts',
    }),
    createPost(post){
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post){
      this.posts = this.posts.filter(p => p.id !== post.id);
    },
    showDialog(){
      this.dialogVisible = true;
    },
    changePage(pageNumber) {
      this.page = pageNumber;
    }
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isLoading: state => state.post.isLoading,
      selectedSort: state => state.post.selectedSort,
      sortOptions: state => state.post.sortOptions,
      searchPosts: state => state.post.searchPosts,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPage: state => state.post.totalPage,
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      searchedAndSortedPosts: 'post/searchedAndSortedPosts'
    }),
  },
  watch: {
    page() {
      this.fetchPosts();
    }
  }
}
</script>

<style>
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