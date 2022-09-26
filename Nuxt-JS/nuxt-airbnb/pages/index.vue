<template>
  <div>
    <div
      v-for="home in homes"
      :key="home.objectID"
      style="float: left; margin: 10px"
    >
      <home-card :home="home" />
    </div>
  </div>
</template>

<script>
import homes from "~/data/homes";
export default {
  head() {
    return {
      title: "HomePage",
      meta: [
        {
          name: "description",
          content: "This is a homepage!",
          hid: "description",
        },
      ],
    };
  },

  data() {
    return {
      homes: homes.slice(0, 3),
    };
  },
};
</script>

<style></style>
