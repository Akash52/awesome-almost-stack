<template>
  <div class="max-w-md py-2 my-2 bg-gray-800 rounded-xl shadow-lg">
    <img
      alt="..."
      :src="car.image_link"
      class="shadow-xl border-b-2 border-emerald-50 hover:opacity-80 transition duration-600 cursor-pointer -mt-2"
    />
    <div class="pt-6 text-center">
      <h5 class="text-xl font-bold text-gray-400 whitespace-nowrap">
        {{ car.name }}
      </h5>
      <div class="mt-6">
        <router-link
          :class="{ disabled: !car.price }"
          :to="{
            name: 'CarPage',
            params: {
              id: car.id
            }
          }"
        >
          <button
            class="px-6 py-3 mb-1 mr-1 text-base font-bold text-gray-300 uppercase transition-all duration-150 ease-in bg-green-700 rounded-full shadow-md outline-none hover:shadow-lg focus:outline-none hover:bg-blue-600"
            type="button"
          >
            {{ priceshow(car) }}
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    car: Object
  },
  // eslint-disable-next-line space-before-function-paren
  methods: {
    // eslint-disable-next-line space-before-function-paren
    priceshow(car) {
      if (car.price) {
        return `${car.price}`
      } else {
        return 'Available soon'
      }
    }
  }
}
</script>
