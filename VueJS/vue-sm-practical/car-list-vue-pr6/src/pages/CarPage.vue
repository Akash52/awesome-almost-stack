/* eslint-disable */
<template>
  <div class="flex items-center justify-center align-middle">
    <div v-if="!loading" class="px-4 mx-auto">
      <h1
        class="relative p-2 mt-5 -mb-3 font-bold text-center text-gray-100 border-2 border-pink-300 shadow-xl xs:text-xl sm:text-xl md:text-2xl lg:text-3xl bg-cyan-800 rounded-t-2xl"
      >
        {{ car.name }}
      </h1>
      <span
        class="absolute top-0 z-50 p-2 m-2 -mt-1 font-extrabold transition translate-y-3 bg-gray-800 rounded-full shadow-2xl cursor-pointer text-neutral-100 -translate-x-7 duration-600 shadow-orange-500 hover:ring-4 ring-pink-300"
        @click="goToHome()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </span>

      <div
        class="max-w-md py-2 my-2 border-b-2 border-pink-200 shadow-lg bg-gradient-to-r from-cyan-700 border-x-2 to-cyan-900 rounded-b-xl"
      >
        <img
          alt="..."
          :src="car.image_link"
          class="-mt-2 transition border-2 border-b-2 shadow-xl cursor-pointer hover:opacity-80 duration-600 border-emerald-400"
        />
        <div class="pt-2">
          <h5
            class="px-2 py-4 text-lg font-bold text-left text-gray-200 border-b whitespace-nowrap border-slate-700"
          >
            <span class="text-slate-800">Car Name 🏁 </span>
            {{ car.name }}
          </h5>
          <h5
            class="px-2 py-2 text-lg font-bold text-left text-gray-200 border-b whitespace-nowrap border-slate-700"
          >
            <span class="text-slate-800">Top Speed 🔥 </span>
            {{ car.top_speed }}
          </h5>
          <h5
            class="px-2 py-2 text-lg font-bold text-left text-gray-200 border-b whitespace-nowrap border-slate-700"
          >
            <span class="text-slate-800">Price 🤑 </span>
            {{ car.price }}
          </h5>
          <h5 class="px-2 py-2 text-lg font-bold text-center text-gray-200">
            <span class="text-slate-800">Info 📔 </span>
          </h5>

          <h5 class="px-2 py-2 text-sm font-bold text-center text-gray-200">
            {{ car.description }}
          </h5>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="loader mt-2 mx-auto"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },

  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      // here we are going to define our cars array
      loading: false,
      cars: []
    }
  },

  // eslint-disable-next-line space-before-function-paren
  async created() {
    this.loading = true
    const { data } = await axios.get(
      'https://vue-fake-server.herokuapp.com/cardata'
    )
    this.cars = data
    this.loading = false
  },

  computed: {
    // eslint-disable-next-line space-before-function-paren
    car() {
      return this.cars.find((car) => car.id === Number(this.id)) || {}
    }
  },

  methods: {
    // eslint-disable-next-line space-before-function-paren
    goToHome() {
      this.$router.push('/')
    }
  }
}
</script>
