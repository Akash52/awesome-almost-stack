<template>
  <form @submit.prevent="handleSubmit">
    <div
      class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
    >
      <div class="relative w-full max-w-md mx-auto my-6">
        <div
          class="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none"
        >
          <div class="relative flex-auto p-6">
            <div>
              <label
                htmlFor="todo"
                class="block mb-2 text-lg font-medium text-gray-900"
              >
                Update Car
              </label>
              <input
                type="text"
                placeholder="CAR NAME"
                class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2"
                v-model="name"
              />
              <input
                type="text"
                placeholder="TOP SPEED"
                class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2"
                v-model="top_speed"
              />
              <textarea
                placeholder="DESCRIPTION"
                class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2"
                v-model="description"
              ></textarea>
              <input
                type="text"
                placeholder="IMAGE URL"
                class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2"
                v-model="image_link"
              />
              <input
                type="text"
                placeholder="PRICE"
                class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2"
                v-model="price"
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
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed inset-0 z-40 bg-black opacity-25"></div>
  </form>
</template>

<script>
export default {
  name: 'EditCarForm',
  props: ['id'],
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

  // eslint-disable-next-line space-before-function-paren
  mounted() {
    fetch(`https://vue-fake-server.herokuapp.com/cardata/${this.id}`)
      .then((res) => res.json())
      .then((data) => {
        this.name = data.name
        this.top_speed = data.top_speed
        this.description = data.description
        this.image_link = data.image_link
        this.price = data.price
      })
  },

  methods: {
    // eslint-disable-next-line space-before-function-paren
    handleSubmit() {
      fetch(`https://vue-fake-server.herokuapp.com/cardata/${this.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.name,
          top_speed: this.top_speed,
          description: this.description,
          image_link: this.image_link,
          price: this.price
        })
      })
        .then(() => {
          this.$router.push('/')
        })
        .catch((err) => console.log(err))
    }
  }
}
</script>
