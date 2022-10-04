<template>
  <div
    className="container mt-20 flex flex-col p-4 shadow-xl   backdrop-blur-xl blur-lg"
  >
    <header
      class="bg-gradient-to-r from-green-500 via-blue-300 font-semibold to-yellow-400 text-white text-2xl px-2 py-2"
    >
      Posts for {{ currentPeriod.toLowerCase() }}
    </header>
    <nav class="flex flex-col justify-center timeline-nav">
      <span class="flex justify-center py-4 space-x-8">
        <a
          class="font-semibold text-gray-700 border-gray-700"
          v-for="period in periods"
          :key="period"
          :class="{
            'border-b-2 font-medium': period === currentPeriod,
          }"
          :data-test="period"
          @click="setPeriod(period)"
        >
          {{ period }}
        </a>
      </span>
    </nav>
    <timeline-post-vue v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import moment from "moment";
import TimelinePostVue from "./TimelinePost.vue";
import { useStore } from "../store";
import { Post } from "../mocks";

type Period = "Today" | "This Week" | "This Month";

export default defineComponent({
  name: "Timeline",
  components: {
    TimelinePostVue,
  },
  async setup() {
    const periods: Period[] = ["Today", "This Week", "This Month"];
    const currentPeriod = ref<Period>("Today");
    const store = useStore();
    if (!store.getState().posts.loaded) {
      await store.fetchPosts();
    }
    const allPosts: Post[] = store
      .getState()
      .posts.ids.reduce<Post[]>((acc, id) => {
        const thePost = store.getState().posts.all.get(id);
        if (!thePost) {
          throw Error("This post was not found");
        }
        return acc.concat(thePost);
      }, []);
    const posts = computed(() => {
      return allPosts.filter((post) => {
        if (currentPeriod.value === "Today") {
          return post.created.isAfter(moment().subtract(1, "day"));
        }
        if (currentPeriod.value === "This Week") {
          return post.created.isAfter(moment().subtract(1, "week"));
        }
        if (currentPeriod.value === "This Month") {
          return post.created.isAfter(moment().subtract(1, "month"));
        }
        return false;
      });
    });
    const setPeriod = (period: Period) => {
      currentPeriod.value = period;
    };
    return {
      posts,
      periods,
      currentPeriod,
      setPeriod,
    };
  },
});
</script>

<style></style>
