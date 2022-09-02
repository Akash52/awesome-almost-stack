<template>
  <main>
    <CarForm />
    <div v-if="!loading" class="flex flex-wrap">
      <CarList
        v-for="(car, i) in cars"
        :key="i"
        :car="car"
        class="w-full max-w-sm px-4 py-6 mx-auto mb-4 transition duration-500 transform md:w-6/12 xl:4/12 lg:w-4/12 lg:mb-0 hover:scale-110"
      />
    </div>
    <div v-else>
      <div class="loader mt-2 mx-auto"></div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CarList from "~/components/CarList.vue";
import CarForm from "~/components/CarForm.vue";

export default {
  methods: {
    ...mapActions(["getCars"]),
  },
  computed: {
    ...mapGetters(["cars", "loading"]),
  },
  async created() {
    await this.getCars();
  },
  components: { CarList, CarForm },
};
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
