<template>
  <!-- Header -->
  <transition appear="true" name="fade">
    <HeaderComp />
  </transition>
  <!-- End Header -->

  <div v-if="!loading" class="flex flex-wrap">
    <div
      v-for="car in cars"
      :key="car.id"
      class="w-full max-w-sm px-4 py-6 mx-auto mb-4 transition duration-500 transform md:w-6/12 xl:4/12 lg:w-4/12 lg:mb-0 hover:scale-110"
    >
      <transition name="fade">
        <CarList :car="car" />
      </transition>
    </div>
  </div>
  <div v-else>
    <div class="loader mt-2 mx-auto"></div>
  </div>
</template>

<script>
import CarList from '@/components/CarList.vue'
import HeaderComp from '@/components/HeaderComp.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HomePage',
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      show: false
    }
  },

  methods: {
    ...mapActions(['fetchCars']),
    methods: {
      // eslint-disable-next-line space-before-function-paren
    }
  },
  computed: {
    ...mapGetters(['cars', 'loading'])
  },
  // eslint-disable-next-line space-before-function-paren
  created() {
    this.fetchCars()
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
