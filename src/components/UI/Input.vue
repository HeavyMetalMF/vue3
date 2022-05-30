<template>
  <input v-bind:value="modelValue" @input="updateInput" class="post_input" type="text">
</template>

<script>
export default {
  name: "Input",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event){
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.post_input{
  width: 100%;
  padding: 10px 15px;
  margin-top: 10px;
  border: 1px solid teal;
}
</style>