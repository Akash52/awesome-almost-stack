<template>
  <!-- Header -->
  <HeaderComp />
  <div v-if="!loading" class="flex flex-wrap">
    <!-- here we are going to loop through our cars array and display them -->
    <div
      v-for="car in cars"
      :key="car.id"
      class="w-full max-w-sm px-4 py-6 mx-auto mb-4 transition duration-500 transform md:w-6/12 xl:4/12 lg:w-4/12 lg:mb-0 hover:scale-110"
    >
      <CarList :car="car" @deleteCar="handleDelete" />
    </div>
  </div>
  <div v-else>
    <div class="loader mt-2 mx-auto"></div>
  </div>
</template>

<script>
import CarList from '@/components/CarList.vue'
import HeaderComp from '@/components/HeaderComp.vue'
import axios from 'axios'

export default {
  name: 'HomePage',
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      // here we are going to define our cars array
      loading: false,
      cars: []
    }
  },
  // eslint-disable-next-line space-before-function-paren
  mounted() {
    this.loading = true
    axios
      .get('https://vue-fake-server.herokuapp.com/cardata')
      .then((res) => {
        this.cars = res.data
        this.loading = false
      })
      .catch((err) => {
        alert(err)
      })
  },

  methods: {
    // eslint-disable-next-line space-before-function-paren
    handleDelete(id) {
      return (this.cars = this.cars.filter((car) => car.id !== id))
    }
  },
  components: { CarList, HeaderComp }
}
</script>

<style>
.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
