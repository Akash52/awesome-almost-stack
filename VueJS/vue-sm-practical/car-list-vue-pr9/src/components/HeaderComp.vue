<template>
  <div class="sticky top-0 z-50 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <nav
      class="z-50 max-w-4xl p-2 mx-auto font-medium text-center text-gray-800 rounded-lg shadow-md shadow-green-500 bg-gray-800 whitespace-nowrap"
    >
      <div class="flex justify-between">
        <ul
          class="flex items-center justify-center p-4 text-center shadow-sm bg-slate-200 hover:bg-slate-50 rounded-xl"
        >
          <li>
            <router-link to="/" title="Home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 transition duration-300 rounded-lg hover:text-slate-900 hover:scale-125"
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
            </router-link>
          </li>
        </ul>

        <span class="mt-4 text-lg font-semibold text-gray-200 dark:text-white">
          {{ email }}
        </span>

        <div class="flex justify-between">
          <ul
            class="flex items-center justify-center p-4 text-center shadow-md bg-slate-200 hover:bg-slate-50 rounded-xl"
            v-if="isLoggedIn"
          >
            <li title="Add new car">
              <router-link :to="{ name: 'AddCar' }">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 transition duration-300 rounded-lg hover:text-slate-900 hover:scale-125"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  title="Add new car"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </router-link>
            </li>
          </ul>
          <ul
            class="flex items-center justify-center ml-2 p-4 text-center shadow-md bg-slate-200 hover:bg-slate-50 rounded-xl"
          >
            <li v-if="!isLoggedIn" title="Login">
              <router-link :to="{ name: 'UserLogin' }">
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
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
              </router-link>
            </li>
            <li v-if="isLoggedIn" @click="logout" title="Logout">
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
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </li>
          </ul>
          <ul
            class="flex items-center justify-center ml-2 p-4 text-center shadow-md bg-slate-200 hover:bg-slate-50 rounded-xl"
            title="Register"
            v-if="isShow"
          >
            <li>
              <router-link :to="{ name: 'UserRegister' }">
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
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      isShow: false
    }
  },
  computed: {
    // eslint-disable-next-line space-before-function-paren
    isLoggedIn() {
      return this.$store.getters.isAuthenticated
    },
    // eslint-disable-next-line space-before-function-paren
    email() {
      return localStorage.getItem('email')
    }
  },
  methods: {
    // eslint-disable-next-line space-before-function-paren
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>
