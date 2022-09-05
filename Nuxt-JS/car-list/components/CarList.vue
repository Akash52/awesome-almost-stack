<template>
  <div
    class="max-w-sm my-4 bg-gray-800 rounded-xl border-emerald-500 border-2 shadow-2xl"
  >
    <img
      alt="..."
      :src="car.image_link"
      class="-mt-2 transition shadow-orange-600 shadow-md backdrop-blur-md cursor-pointer hover:opacity-80 duration-600 py-1 px-1 rounded-xl"
    />
    <div class="pt-6 text-center">
      <h5 class="text-xl font-bold text-gray-400 whitespace-nowrap">
        {{ car.name }}
      </h5>
      <div class="mt-6">
        <nuxt-link :to="{ name: 'cars-carid', params: { carid: car.id } }">
          <button
            class="px-6 py-3 mb-1 mr-1 text-base font-bold text-gray-300 uppercase transition-all duration-150 ease-in bg-green-700 rounded-full shadow-md outline-none hover:shadow-lg focus:outline-none hover:bg-blue-600"
            type="button"
          >
            info
          </button>
        </nuxt-link>

        <div class="flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 mr-2 font-extrabold transition bg-gray-800 rounded-full shadow-2xl cursor-pointer text-neutral-100 duration-600 shadow-orange-500 hover:text-blue-500 animate-pulse"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            title="Edit"
            @click="editCar(car.id)"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 mr-2 font-extrabold transition bg-gray-800 rounded-full shadow-2xl cursor-pointer text-neutral-100 duration-600 shadow-orange-500 hover:text-red-500 animate-pulse"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            title="Delete"
            @click="deleteCar(car.id)"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["car"],
  data() {
    return {
      message: "Hello World",
    };
  },
  methods: {
    // ...mapActions(["deleteCar"]),
    deleteCar(id) {
      this.$emit("deleteCar", id);
    },
    editCar(id) {
      this.$emit("editCar", id);
    },
  },
};
</script>

<style></style>
