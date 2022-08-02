<template>
  <div class="containerClass">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.containerClass {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
