<template>
  <header>
    <h1>{{ title }}</h1>
    <Button />
  </header>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'Header-Component',
  props: {
    title: String
  },
  components: {
    Button
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
}
</style>
