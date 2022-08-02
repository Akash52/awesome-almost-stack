<template>
  <button @click="onClick()" class="btn">Add Task</button>
</template>

<script>
export default {
  name: 'Button-Component',
  methods: {
    // eslint-disable-next-line space-before-function-paren
    onClick() {
      console.log('clicked')
    }
  }
}
</script>
