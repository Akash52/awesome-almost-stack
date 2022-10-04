<template>
  <div id="modal" :style="style"></div>
  <div className="container  mx-auto px-4 sm:px-6 lg:px-8">
    <Navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import Navbar from './components/Navbar.vue';
import { useModal } from './useModal';

export default defineComponent({
  name: 'App',
  components: { Navbar },
  setup() {
    const modal = useModal();

    const style = computed(() => {
      return {
        display: modal.show.value ? 'block' : 'none',
      };
    });
    return {
      style,
      hide: () => {
        modal.hideModal();
      },
    };
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
