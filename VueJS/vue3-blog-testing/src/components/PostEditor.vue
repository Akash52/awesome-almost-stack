<template>
  <post-writer :post="post" @save="save" />
</template>

<script lang="ts">
import { Post } from "@/mocks";
import { useStore } from "@/store";
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import PostWriter from "./PostWriter.vue";

export default defineComponent({
  components: { PostWriter },
  async setup(props) {
    const store = useStore();
    const id = useRoute().params.id as string;
    const router = useRouter();

    if (!store.getState().posts.loaded) {
      await store.fetchPosts();
    }

    const post = store.getState().posts.all.get(id);

    if (!post) {
      throw Error("Post was not Found");
    }

    if (post.authorId !== store.getState().authors.currentUserId) {
      router.push("/");
    }

    const save = async (post: Post) => {
      await store.updatePost(post);
      router.push("/");
    };

    return {
      save,
      post,
    };
  },
});
</script>
