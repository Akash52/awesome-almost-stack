<template>
  <div
    class="flex flex-col justify-center items-center sm:mx-4 sm:px-6 lg:px-8 login-page"
  >
    <div class="w-full max-w-md mx-auto">
      <h2
        class="text-2xl font-extrabold text-center text-white lg:text-3xl md:text-xl"
      >
        {{ submitButtonCaption }} to your account
      </h2>
    </div>
    <div
      class="mt-4 shadow-md sm:mx-auto sm:w-full hover:shadow-sm sm:max-w-md"
    >
      <div
        class="px-4 relative py-8 transition duration-500 bg-gray-800 hover:opacity-95 sm:rounded-lg sm:px-10"
      >
        <VeeForm @submit="onSubmit">
          <VeeErrorMessage name="email" class="text-red-500 text-xs italic" />
          <VeeField
            type="email"
            name="email"
            placeholder="Email"
            class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2"
            v-model="formData.email"
            :rules="{ required: true, email: true }"
          />
          <VeeErrorMessage
            name="password"
            class="text-red-500 text-xs italic"
          />
          <VeeField
            type="password"
            name="password"
            placeholder="Password"
            class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2"
            v-model="formData.password"
            :rules="{ required: true, password: true, min: 8, max: 12 }"
          />
          <transition appear="true" name="fade">
            <button
              class="w-full px-6 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
              type="submit"
            >
              {{ submitButtonCaption }}
            </button>
          </transition>
          <p class="mt-4 text-base text-gray-300 italic">
            <span class="text-orange-300">
              <button type="button" mode="flat" @click="switchMode">
                {{ switchModeCaption }}
              </button>
            </span>
          </p>
        </VeeForm>
        <span
          class="absolute top-0 left-0 z-50 ml-8 p-2 m-2 -mt-1 font-extrabold transition -translate-y-3 bg-pink-400 rounded-full shadow-2xl cursor-pointer text-neutral-100 -translate-x-7 duration-600 shadow-orange-500 hover:ring-4 ring-gray-100"
          @click="goToHome()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 text-slate-900"
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
        <span
          :show="!!error"
          class="text-red-600 absolute bottom-0 right-0 m-2 p-2 rounded-md bg-slate-900"
          >{{ error }}</span
        >
      </div>
    </div>
    <h1
      v-for="i in airports"
      :key="i"
      class="text-2xl font-extrabold text-center text-white lg:text-3xl md:text-xl"
    >
      {{ i }}
    </h1>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      error: null,
      mode: 'login',
      formIsValid: true,
      isLoading: false,
      formData: {
        email: '',
        password: ''
      }
    }
  },

  computed: {
    // eslint-disable-next-line space-before-function-paren
    submitButtonCaption() {
      if (this.mode === 'login') {
        return 'Login'
      } else {
        return 'Register'
      }
    },
    // eslint-disable-next-line space-before-function-paren
    switchModeCaption() {
      if (this.mode === 'login') {
        return 'Signup instead'
      } else {
        return 'Login instead'
      }
    },
    // eslint-disable-next-line space-before-function-paren
    airports() {
      if (process.env.NODE_ENV === 'development') {
        return [
          {
            id: 1,
            name: 'SFO'
          },
          {
            id: 2,
            name: 'LAX'
          },
          {
            id: 3,
            name: 'JFK'
          }
        ]
      } else {
        return []
      }
    }
  },
  methods: {
    // eslint-disable-next-line space-before-function-paren
    goToHome() {
      this.$router.push('/')
    },
    // eslint-disable-next-line space-before-function-paren
    async onSubmit() {
      this.isLoading = true
      this.error = null
      this.formIsValid = true
      const actionPayload = {
        email: this.formData.email,
        password: this.formData.password
      }
      try {
        if (this.mode === 'login') {
          await this.$store.dispatch('signin', actionPayload)
        } else {
          await this.$store.dispatch('signup', actionPayload)
        }
        const redirectUrl = '/' + (this.$route.query.redirect || '')
        this.$router.replace(redirectUrl)
      } catch (err) {
        this.error = 'Something went wrong'
      }
      this.isLoading = false
    },
    // eslint-disable-next-line space-before-function-paren
    switchMode() {
      if (this.mode === 'login') {
        this.mode = 'register'
      } else {
        this.mode = 'login'
      }
    }
  }
}
</script>

<style>
.login-page {
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  text-align: center;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>
