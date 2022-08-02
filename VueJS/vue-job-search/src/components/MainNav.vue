<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 border-b border-solid border-brand-gray-1"
      >
        <a :href="url" class="flex items-center h-full text-xl">
          {{ company }}
        </a>
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              class="h-full ml-9"
              v-for="menuItem in menuItems"
              :key="menuItem"
            >
              <a :href="menuItem.url" class="flex items-center h-full py-2.5">
                <span class="text-gray-600">{{ menuItem.name }}</span>
              </a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLoggedIn" data-test="profile-image" />
          <action-button-vue
            v-else
            data-test="action-button"
            @click="loginUser"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ActionButtonVue from "@/components/ActionButton.vue";
import ProfileImage from "@/components/ProfileImage.vue";

export default {
  name: "MainNav",
  components: {
    ActionButtonVue,
    ProfileImage,
  },
  data() {
    return {
      company: "Vue Careers",
      url: "https://vuejs.org/",
      menuItems: [
        {
          name: "Teams",
          url: "/",
        },
        {
          name: "Locations",
          url: "/",
        },
        {
          name: "Life at Binary Corp",
          url: "/",
        },
        {
          name: "How We hire",
          url: "/",
        },
        {
          name: "Students",
          url: "/",
        },
        {
          name: "Jobs",
          url: "/",
        },
      ],
      isLoggedIn: false,
    };
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>

<style></style>
