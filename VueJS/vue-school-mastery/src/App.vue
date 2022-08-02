<template>
  <TheNavbar />
  <div class="container">
    <page-home-vue />
    <router-view />
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
export default {
  name: "App",
  components: { TheNavbar },
};
</script>

<style>
@import "./assets/styles.css";
</style>
