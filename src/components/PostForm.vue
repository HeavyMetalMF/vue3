<template>
  {{title}}
  <form @submit.prevent>
    <h4>Creating posts</h4>
    <Input type="text" placeholder="title" v-model="post.title"  />
    <Input type="text" placeholder="description" v-model="post.body"/>
    <Button
        style="align-self: flex-end; margin-top: 15px;" @click="createPost"
    >Create post</Button>
  </form>
</template>

<script>
export default {
  name: "PostForm",
  components: {},
  props: {
    title: {
      type: String
    }
  },
  data(){
    return{
      post: {
        title: '',
        body: '',
      }
    }
  },
  methods: {
    createPost(){
      this.post.id = Date.now();
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: '',
      }
    }
  }
}
</script>

<style scoped>

</style>