<template>
  <suspense>
    <template #default>
      <time-line />
    </template>
    <template #fallback>
      <SpinnerVue />
    </template>
  </suspense>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SpinnerVue from "./Spinner.vue";
import TimeLine from "./TimeLine.vue";

export default defineComponent({
  name: "Home",
  components: {
    TimeLine,
    SpinnerVue,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
