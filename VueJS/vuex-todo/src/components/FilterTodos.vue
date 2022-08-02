<template>
  <select
    id="countries"
    class="bg-gray-800 border border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mb-4 mt-6 text appearance-none outline-none cursor-context-menu"
    @change="filterTodos($event)"
  >
    <option selected>Filter Todos</option>
    <option value="200">200</option>
    <option value="100">100</option>
    <option value="50">50</option>
    <option value="25">25</option>
    <option value="20">20</option>
    <option value="10">10</option>
    <option value="5">5</option>
  </select>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['filterTodos'])
  }
}
</script>

<style></style>
