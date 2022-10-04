<template>
  <div
    class="flex justify-center mt-32 -mb-20 text-2xl font-semibold text-gray-800"
  >
    Post Writer
  </div>
  <PostWriter :post="newPost" @save="save" />
</template>

<script lang="ts">
import PostWriter from "./PostWriter.vue";
import { defineComponent } from "vue";
import { Post } from "@/mocks";
import moment from "moment";
import { useStore } from "@/store";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    PostWriter,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const authorId = store.getState().authors.currentUserId;

    if (!authorId) {
      throw Error("currentUserId was not found.");
    }

    const newPost: Post = {
      id: "-1",
      title: "New post",
      created: moment().subtract(1, "second"),
      authorId,
    };

    const save = async (post: Post) => {
      await store.createPost(post);
      router.push("/");
    };

    return {
      save,
      newPost,
    };
  },
});
</script>

<style></style>
