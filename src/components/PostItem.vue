<template>
  <div class="post" >
    <div>
      <div><strong>Name: </strong>{{post.title}}</div>
      <div><strong>Description: </strong>{{post.body}}</div>
    </div>
    <div class="delete__btn">
      <Button @click="$emit('remove', post)" >Delete</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  components: {},
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
</style>