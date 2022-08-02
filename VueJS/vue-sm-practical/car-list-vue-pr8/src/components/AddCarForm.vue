<template>
  <VeeForm @submit="handleSubmit">
    <div
      class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
    >
      <div class="relative w-full max-w-md mx-auto my-6">
        <div
          class="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none"
        >
          <span
            class="absolute top-0 z-50 p-2 m-2 -mt-1 font-extrabold transition bg-gray-800 rounded-full shadow-2xl cursor-pointer text-neutral-100 -translate-x-7 duration-600 shadow-orange-500 hover:ring-4 ring-pink-300"
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
          <div class="relative flex-auto p-6">
            <div>
              <label
                htmlFor="todo"
                class="block mb-2 text-lg font-medium text-gray-900"
              >
                Add new Car
              </label>
              <VeeErrorMessage
                name="name"
                class="text-red-500 text-xs italic"
              />
              <VeeField
                type="text"
                name="name"
                placeholder="CAR NAME"
                class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2"
                v-model="name"
                :rules="{ required: true, min: 3, max: 20 }"
              />
              <VeeErrorMessage
                name="top_speed"
                class="text-red-500 text-xs italic"
              />
              <VeeField
                type="text"
                name="top_speed"
                placeholder="TOP SPEED"
                class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2"
                v-model="top_speed"
                :rules="{ required: true, numeric: true, min: 3, max: 40 }"
              />
              <VeeErrorMessage
                name="description"
                class="text-red-500 text-xs italic"
              />
              <VeeField
                placeholder="DESCRIPTION"
                name="description"
                class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2"
                v-model="description"
                type="text"
                :rules="{ required: true, min: 20, max: 120 }"
              />
              <VeeErrorMessage
                name="image_link"
                class="text-red-500 text-xs italic"
              />
              <VeeField
                type="url"
                name="image_link"
                placeholder="IMAGE URL"
                class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2"
                pattern="/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i"
                v-model="image_link"
                :rules="{ required: true, url: true }"
              />
              <VeeErrorMessage
                name="price"
                class="text-red-500 text-xs italic"
              />
              <VeeField
                type="text"
                name="price"
                placeholder="PRICE"
                class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2"
                v-model="price"
                :rules="{ required: true, numeric: true, min: 0, max: 1000000 }"
              />
            </div>
          </div>
          <div
            class="flex items-center justify-center p-2 border-t border-solid rounded-b border-blueGray-200"
          >
            <button
              class="w-full px-6 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
              type="submit"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed inset-0 z-40 bg-black opacity-25"></div>
  </VeeForm>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddCarForm',
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      name: '',
      top_speed: '',
      description: '',
      image_link: '',
      price: ''
    }
  },
  methods: {
    ...mapActions(['addCar']),
    // eslint-disable-next-line space-before-function-paren
    handleSubmit() {
      this.addCar({
        name: this.name,
        top_speed: this.top_speed,
        description: this.description,
        image_link: this.image_link,
        price: this.price
      })
      this.name = ''
      this.top_speed = ''
      this.description = ''
      this.image_link = ''
      this.price = ''
      this.$router.push('/')
    },
    // eslint-disable-next-line space-before-function-paren
    goToHome() {
      this.$router.push('/')
    }
  }
}
</script>
