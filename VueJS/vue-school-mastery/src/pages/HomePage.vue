<template>
  <h1 class="push-top">Welcome to the Forum</h1>
  <category-list :categories="categories" />
</template>

<script>
import CategoryList from "@/components/CategoryList.vue";

export default {
  components: {
    CategoryList,
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
  },
};
</script>
