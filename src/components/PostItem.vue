<template>
  <div class="post" >
    <div>
      <div><strong>Name: </strong>{{post.title}}</div>
      <div><strong>Description: </strong>{{post.body}}</div>
    </div>
    <div class="post__btns">
      <Button @click="$emit('remove', post)" >Delete</Button>
      <Button @click="$router.push(`/posts/${post.id}`)" >Open post</Button>
    </div>
  </div>
</template>

<script>
import Button from "@/components/UI/Button";
export default {
  name: "PostItem",
  components: {Button},
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.post{
  padding: 15px;
  border: 3px solid teal;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.post__btns{
  display: flex;
}
</style>