<template>
  <div>
    <Navigation />
    <div
      class="max-w-5xl flex flex-col justify-center mx-auto container px-4 sm:px-6 lg:px-8 mt-8"
    >
      <ul
        class="bg-gray-900 p-4 mx-auto container rounded-md shadow shadow-indigo-500"
      >
        <li v-for="todo in todos.slice(0, 8)" :key="todo.id">
          <div
            @dblclick="editTodo(todo)"
            :class="[
              todo.completed
                ? 'bg-slate-800 text-gray-400 line-through'
                : 'text-gray-100',
              'block px-4 py-2 text-sm',
              'flex justify-between bg-slate-800 m-1 p-2 items-center rounded-md transition duration-500 transform hover:opacity-75 cursor-pointer',
            ]"
          >
            {{ todo.title }}
            <button
              class="font-bold py-2 px-4 rounded-full"
              @click="deleteTodo(todo.id)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-red-400 hover:text-red-600 transition duration-300 ease-in-out"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { fetchData } from "./shared";
import Navigation from "../components/navigation.vue";
export default {
  fetch: fetchData,
  components: {
    Navigation,
  },
  computed: {
    ...mapState({
      todos: (state) => state.todos,
    }),
  },
  methods: {},
  components: { Navigation },
};
</script>
