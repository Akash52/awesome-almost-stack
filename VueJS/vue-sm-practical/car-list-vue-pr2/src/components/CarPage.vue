/* eslint-disable */
<template>
  <div class="flex justify-center align-middle items-center">
    <div class="mx-auto px-4">
      <h1
        class="xs:text-xl relative sm:text-xl md:text-2xl text-center lg:text-3xl text-gray-100 font-bold border-2 shadow-xl border-pink-300 p-2 -mb-3 bg-cyan-800 mt-5 rounded-t-2xl"
      >
        {{ car.name }}
      </h1>

      <span
        class="absolute cursor-pointer font-extrabold text-neutral-100 z-50 p-2 m-2 rounded-full bg-gray-800 top-0 -mt-1 translate-y-3 -translate-x-7 shadow-2xl transition duration-600 shadow-orange-500 hover:ring-4 ring-pink-300"
        @click="goToHome()"
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
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </span>

      <div
        class="max-w-md py-2 my-2 bg-gradient-to-r from-cyan-700 border-x-2 border-b-2 border-pink-200 to-cyan-900 rounded-b-xl shadow-lg"
      >
        <img
          alt="..."
          :src="car.image_link"
          class="shadow-xl border-b-2 hover:opacity-80 transition duration-600 border-2 border-emerald-400 cursor-pointer -mt-2"
        />
        <div class="pt-2">
          <h5
            class="text-lg text-left font-bold text-gray-200 whitespace-nowrap border-b border-slate-700 py-4 px-2"
          >
            <span class="text-slate-800">Car Name 🏁 </span>
            {{ car.name }}
          </h5>
          <h5
            class="text-lg text-left font-bold text-gray-200 whitespace-nowrap border-b border-slate-700 py-2 px-2"
          >
            <span class="text-slate-800">Top Speed 🔥 </span>
            {{ car.top_speed }}
          </h5>
          <h5
            class="text-lg text-left font-bold text-gray-200 whitespace-nowrap border-b border-slate-700 py-2 px-2"
          >
            <span class="text-slate-800">Price 🤑 </span>
            {{ car.price }}
          </h5>
          <h5 class="text-lg text-center font-bold text-gray-200 py-2 px-2">
            <span class="text-slate-800">Info 📔 </span>
          </h5>

          <h5 class="text-sm text-center font-bold text-gray-200 py-2 px-2">
            {{ car.description }}
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/data.json'

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },

  computed: {
    // eslint-disable-next-line space-before-function-paren
    car() {
      return data.find((car) => car.id === Number(this.id)) || {}
    }
  },

  methods: {
    // eslint-disable-next-line space-before-function-paren
    goToHome() {
      this.$router.push('/')
    }
    // eslint-disable-next-line space-before-function-paren
  }
}
</script>
