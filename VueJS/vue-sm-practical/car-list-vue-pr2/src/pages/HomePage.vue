<template>
  <!-- Our Header -->
  <HeaderComp />
  <div class="flex flex-wrap">
    <!-- here we are going to loop through our cars array and display them -->
    <div
      v-for="car in cars"
      :key="car.id"
      class="w-full max-w-sm py-6 px-4 mb-4 mx-auto transition duration-500 transform md:w-6/12 xl:4/12 lg:w-4/12 lg:mb-0 hover:scale-110"
    >
      <CarList :car="car" />
    </div>
  </div>
</template>

<script>
import CarList from '@/components/CarList.vue'
import HeaderComp from '@/components/HeaderComp.vue'
import data from '@/data.json'

export default {
  name: 'HomePage',
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      // here we are going to define our cars array
      cars: data
    }
  },
  components: { CarList, HeaderComp }
}
</script>
