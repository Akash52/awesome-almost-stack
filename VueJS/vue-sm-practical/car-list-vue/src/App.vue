<template>
  <div class="containerClass"></div>
  <router-view />
</template>

<script>
export default {
  name: 'App'
  // eslint-disable-next-line space-before-function-paren
}
</script>

<style>
.containerClass {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
