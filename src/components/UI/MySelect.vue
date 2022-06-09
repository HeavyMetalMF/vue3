<template>
  <select v-model="modelValue" @change="changeOptions">
    <option disabled value="">Выбрать из списка</option>
    <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
  </select>
</template>

<script>
export default {
  name: "MySelect",
  props: {
    modelValue: {
      type: [String, Number]
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOptions(event){
      // console.log(event)
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style scoped>

</style>