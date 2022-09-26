<template>
  <nav class="flex justify-center bg-gray-900 shadow-md shadow-blue-500 py-2">
    <nuxt-link exact class="text-white text-2xl" to="/"> Todos </nuxt-link>
    <nuxt-link class="text-white text-2xl ml-4" :to="{ name: 'completed' }">
      completed
    </nuxt-link>
    <nuxt-link class="text-white text-2xl ml-4" :to="{ name: 'active' }">
      Active
    </nuxt-link>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
