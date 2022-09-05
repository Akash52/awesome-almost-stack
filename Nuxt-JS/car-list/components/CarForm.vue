<template>
  <ValidationObserver v-slot="{ validate }">
    <form
      @submit.prevent="
        validate().then((success) => {
          if (success) {
            handleSubmit();
          }
        })
      "
    >
      <div
        class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none backdrop-blur-sm"
      >
        <div
          class="relative w-full max-w-md mx-auto my-6 backdrop-blur-xl p-4 rounded-md shadow-md border-1 shadow-green-600"
        >
          <div
            class="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none opacity-95"
          >
            <span
              class="absolute top-0 z-50 p-2 m-2 -mt-1 font-extrabold transition bg-slate-800 rounded-full shadow-2xl cursor-pointer text-neutral-100 -translate-x-7 duration-600 shadow-orange-500 hover:ring-4 ring-green-300"
              @click="closeModal()"
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
                  {{ modaleTitle }}
                </label>
                <ValidationProvider
                  name="name"
                  rules="required|alpha"
                  v-slot="{ errors }"
                >
                  <span
                    class="text-red-500 text-xs italic transition duration-300 ease-in-out"
                    >{{ errors[0] }}</span
                  >
                  <input
                    type="text"
                    name="name"
                    placeholder="CAR NAME"
                    class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2"
                    v-model="name"
                    :rules="{ required: true, min: 3, max: 20 }"
                  />
                </ValidationProvider>
                <ValidationProvider
                  name="top_speed"
                  :rules="{ required: true, numeric: true, min: 3, max: 40 }"
                  v-slot="{ errors }"
                >
                  <span
                    class="text-red-500 text-xs italic transition duration-300 ease-in-out"
                    >{{ errors[0] }}</span
                  >
                  <input
                    type="text"
                    name="top_speed"
                    placeholder="TOP SPEED"
                    class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2"
                    v-model="top_speed"
                  />
                </ValidationProvider>
                <ValidationProvider
                  name="description"
                  :rules="{ required: true, min: 20, max: 120 }"
                  v-slot="{ errors }"
                >
                  <span
                    class="text-red-500 text-xs italic transition duration-300 ease-in-out"
                    >{{ errors[0] }}</span
                  >
                  <input
                    placeholder="DESCRIPTION"
                    name="description"
                    class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2"
                    v-model="description"
                    type="text"
                  />
                </ValidationProvider>
                <!-- <ValidationProvider
                  name="image_link"
                  :rules="{ required: true, image: true }"
                  v-slot="{ errors }"
                >
                  <span
                    class="text-red-500 text-xs italic transition duration-300 ease-in-out"
                    >{{ errors[0] }}</span
                  >
                  <input
                    type="url"
                    name="image_link"
                    placeholder="IMAGE URL"
                    class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2"
                    pattern="/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i"
                    v-model="image_link"
                  />
                </ValidationProvider> -->
                <ValidationProvider
                  name="price"
                  :rules="{
                    required: true,
                    numeric: true,
                    min: 0,
                    max: 1000000,
                  }"
                  v-slot="{ errors }"
                >
                  <span
                    class="text-red-500 text-xs italic transition duration-300 ease-in-out"
                    >{{ errors[0] }}</span
                  >
                  <input
                    type="text"
                    name="price"
                    placeholder="PRICE"
                    class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2"
                    v-model="price"
                  />
                </ValidationProvider>
              </div>
            </div>
            <div
              class="flex items-center justify-center p-2 border-t border-solid rounded-b border-blueGray-200"
            >
              <button
                class="w-full px-6 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                type="submit"
              >
                {{ modalButton }}
              </button>
              <button
                class="w-full px-6 py-3 text-sm ml-2 font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-red-500 active:bg-red-600 hover:shadow-lg focus:outline-none"
                @click="closeModal()"
              >
                close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="fixed inset-0 z-40 bg-black opacity-25"></div>
    </form>
  </ValidationObserver>
</template>

<script>
import { format } from "path";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { ValidationProvider, ValidationObserver },
  props: {
    carId: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      name: "",
      top_speed: "",
      description: "",
      image_link: "",
      price: "",
      mode: "addCar",
    };
  },
  created() {
    if (this.carId) {
      fetch(`https://vue-fake-server.herokuapp.com/cardata/${this.carId}`)
        .then((res) => res.json())
        .then((data) => {
          this.name = data.name;
          this.top_speed = data.top_speed;
          this.description = data.description;
          this.image_link = data.image_link;
          this.price = data.price;
        })
        .finally(() => {
          this.mode = "editCar";
        });
    }
  },
  methods: {
    ...mapActions(["createCar", "updateCar", "getCar"]),
    async handleSubmit() {
      const car = {
        name: this.name,
        top_speed: this.top_speed,
        description: this.description,
        image_link: this.image_link,
        price: this.price,
      };
      if (this.mode === "addCar") {
        await this.createCar(car);
      } else {
        if (this.carId !== null) {
          const updatedCar = {
            ...car,
            id: this.carId,
          };
          await this.updateCar(updatedCar);
        }
      }
      this.closeModal();
    },
    closeModal() {
      this.$emit("close");
    },
  },
  computed: {
    modalButton() {
      return this.mode === "addCar" ? "Add Car" : "Update Car";
    },
    modaleTitle() {
      return this.mode === "addCar" ? "Add Car" : "Edit Car";
    },
  },
  beforeDestroy() {
    this.mode = "addCar";
  },
};
</script>

<style></style>
