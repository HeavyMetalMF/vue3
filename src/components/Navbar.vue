<template>
  <div  class="navbar">
    <div @click="$router.push('/')">Vue 3 RomanFcknSlave</div>
    <div class="navbar__btns">
      <Button @click="$router.push('/posts')">POSTS</Button>
      <Button @click="$router.push('/about')">ABOUT</Button>
      <Button @click="$router.push('/store')">STORE POSTS</Button>
    </div>
  </div>
</template>

<script>
import Button from "@/components/UI/Button";

export default {
  name: "Navbar",
  components: {Button},

}
</script>

<style scoped>
.navbar{
  height: 50px;
  background-color: gray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  justify-content: space-between;
}
</style>