<template>
  <div class="max-w-md py-2 my-2 bg-gray-800 shadow-lg rounded-xl">
    <img
      alt="..."
      :src="car.image_link"
      class="-mt-2 transition border-b-2 shadow-xl cursor-pointer border-emerald-50 hover:opacity-80 duration-600"
    />
    <div class="pt-6 text-center">
      <h5 class="text-xl font-bold text-gray-400 whitespace-nowrap">
        {{ car.name }}
      </h5>
      <div class="mt-6">
        <router-link
          :to="{
            name: 'CarPage',
            params: {
              id: car.id,
            },
          }"
        >
          <button
            class="px-6 py-3 mb-1 mr-1 text-base font-bold text-gray-300 uppercase transition-all duration-150 ease-in bg-green-700 rounded-full shadow-md outline-none hover:shadow-lg focus:outline-none hover:bg-blue-600"
            type="button"
          >
            info
          </button>
        </router-link>

        <div class="flex justify-end">
          <router-link :to="{ name: 'EditCar', params: { id: car.id } }">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 mr-2 font-extrabold transition bg-gray-800 rounded-full shadow-2xl cursor-pointer text-neutral-100 duration-600 shadow-orange-500 hover:text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              title="Edit"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </router-link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 mr-2 font-extrabold transition bg-gray-800 rounded-full shadow-2xl cursor-pointer text-neutral-100 duration-600 shadow-orange-500 hover:text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            title="Delete"
            @click="deleteCar"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    car: Object
  },
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      uri: 'https://vue-fake-server.herokuapp.com/cardata/' + this.car.id
    }
  },
  methods: {
    // eslint-disable-next-line space-before-function-paren
    deleteCar() {
      confirm('Are you sure you want to delete this car?') &&
        axios
          .delete(this.uri)
          .then(() => {
            this.$emit('deleteCar', this.car.id)
          })
          .catch((error) => {
            console.log(error)
          })
    }
  }
}
</script>
