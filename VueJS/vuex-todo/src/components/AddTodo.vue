<template>
  <form @submit.prevent="onSubmit">
    <div class="relative z-0 w-full mb-2 group flex">
      <input
        type="text"
        name="floating_todo"
        class="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
        v-model="title"
        autocomplete="false"
      />
      <label
        for="floating_todo"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Add a todo
      </label>
      <button
        type="submit"
        class="absolute right-0 top-0 py-2 px-3 transition duration-200 text-gray-100 bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 hover:text-green-500 hover:border-green-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    // eslint-disable-next-line space-before-function-paren
    onSubmit(e) {
      e.preventDefault()
      this.addTodo({
        title: this.title
      })
      this.title = ''
    }
  }
}
</script>

<style>
.new-todo {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
