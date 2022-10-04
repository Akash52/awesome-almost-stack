<template>
  <nav
    class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 backdrop-blur-md shadow-md"
  >
    <div class="container flex items-center justify-between mx-auto">
      <router-link to="/" class="flex items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/7958/7958424.png"
          class="h-6 mr-3 sm:h-9"
          alt="Vue Logo"
        />
        <span
          class="self-center text-xl font-semibold whitespace-nowrap dark:text-white brand-name"
        >
          Vue3 Blog Testing
        </span>
      </router-link>
      <div class="flex md:order-2">
        <div v-if="auth">
          <router-link to="/posts/new">
            <button
              type="button"
              class="text-white ml-2 px-2 py-1 rounded-md bg-gradient-to-r from-green-500 to-blue-500"
            >
              Add Post
            </button>
          </router-link>
          <button
            type="button"
            class="text-white ml-2 px-2 py-1 rounded-md bg-gradient-to-r from-green-500 to-blue-500 whitespace-nowrap"
            @click="signOut"
          >
            Sign Out
          </button>
        </div>
        <div v-else>
          <button
            type="button"
            class="text-white ml-2 px-2 py-1 rounded-md bg-gradient-to-r from-green-500 to-blue-500 whitespace-nowrap"
            @click="signUp"
            data-test="sign-up"
          >
            Sign Up
          </button>

          <button
            type="button"
            class="text-white ml-2 px-2 py-1 rounded-md bg-gradient-to-r from-green-500 to-blue-500 whitespace-nowrap"
            @click="signIn"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
    <teleport to="#modal">
      <div
        class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none backdrop-blur-sm"
      >
        <div
          class="relative w-full max-w-md mx-auto rounded-md shadow-lg backdrop-blur-xl border-1 shadow-slate-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="absolute top-0 right-0 z-50 block w-6 h-6 text-xl font-semibold text-white bg-green-500 rounded-full cursor-pointer hover:opacity-85"
            @click="hide"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>

          <div
            class="relative flex flex-col w-full py-3 bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none opacity-95"
          >
            <component :is="component" />
          </div>
        </div>
      </div>
      <div
        class="fixed inset-0 z-40 bg-black opacity-25 backdrop-blur-lg"
      ></div>
    </teleport>
  </nav>
</template>

<script lang="ts">
import { useModal } from "@/useModal";
import { computed, defineComponent, markRaw } from "vue";
import SignUp from "./SignUp.vue";
import { useStore } from "@/store";

export default defineComponent({
  setup() {
    const modal = useModal();
    const store = useStore();

    const auth = computed(() => {
      return !!store.getState().authors.currentUserId;
    });

    const signIn = () => {};
    const signUp = () => {
      modal.component.value = markRaw(SignUp);
      modal.showModal();
    };
    const signOut = () => {};

    return {
      component: modal.component,
      signIn,
      signUp,
      signOut,
      auth,
      hide: () => {
        modal.hideModal();
      },
    };
  },
  components: { SignUp },
});
</script>

<style></style>
