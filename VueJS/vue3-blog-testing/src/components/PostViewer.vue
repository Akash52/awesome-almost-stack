<template>
  <router-link
    v-if="canEdit"
    :to="`/posts/${post.id}/edit`"
    class="block w-16 px-4 py-1 mt-24 mb-2 ml-2 text-white rounded-md bg-gradient-to-r from-green-500 to-blue-500 whitespace-nowrap"
    data-test="can-edit"
  >
    Edit
  </router-link>

  <main
    class="bg-white px-4 pt-16 pb-24 sm:px-6 sm:pt-24 lg:px-8 lg:py-32 shadow-2xl"
  >
    <div class="max-w-3xl mx-auto">
      <div class="max-w-xl">
        <p class="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
          {{ post.title }}
        </p>
        <p class="mt-2 text-base text-gray-500">Post id : {{ post.id }}</p>

        <div v-html="post.html" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  async setup(props) {
    const products = [
      {
        id: 1,
        name: "Cold Brew Bottle",
        description:
          "This glass bottle comes with a mesh insert for steeping tea or cold-brewing coffee. Pour from any angle and remove the top for easy cleaning.",
        href: "#",
        quantity: 1,
        price: "$32.00",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/confirmation-page-05-product-01.jpg",
        imageAlt: "Glass bottle with black plastic pour top and mesh insert.",
      },
    ];

    const store = useStore();
    const id = useRoute().params.id as string;

    if (!store.getState().posts.loaded) {
      await store.fetchPosts();
    }

    const post = store.getState().posts.all.get(id);

    if (!post) {
      throw Error("Post was not Found");
    }

    const canEdit = post.authorId === store.getState().authors.currentUserId;

    return {
      products,
      post,
      canEdit,
    };
  },
});
</script>
