<template>
  <div>
    <HeaderVue />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderVue from './components/Header.vue';

export default {
  name: 'App',
  components: {
    HeaderVue,
  },
};
</script>

<style lang="scss">
@import 'bootstrap';
</style>
