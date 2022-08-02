<template>
  <div class="containerClass">
    <router-view />
  </div>
  {{ uesrEmail }}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  // eslint-disable-next-line space-before-function-paren
  created() {
    this.$store.dispatch('tryLogin')
  },
  computed: {
    // eslint-disable-next-line space-before-function-paren
    didAutoLogout() {
      return this.$store.getters.didAutoLogout
    },
    ...mapGetters(['userEmail'])
  },
  watch: {
    // eslint-disable-next-line space-before-function-paren
    didAutoLogout(curValue, oldValue) {
      if (curValue && curValue !== oldValue) {
        this.$router.replace('/login')
      }
    }
  }
}
</script>

<style>
.containerClass {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
