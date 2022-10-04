<template>
  <div
    class="container flex flex-col justify-center px-4 py-2 -mt-6 bg-blue-100 rounded-md shadow-md backdrop-blur-md blur-lg"
  >
    <div class="px-4 py-2 mt-20 mb-3 bg-purple-100 rounded-md shadow-md">
      <label
        for="exampleFormControlInput1"
        class="inline-block mb-2 font-semibold text-gray-600 form-label"
      >
        New Post
      </label>
      <input
        type="text"
        class="form-control block w-full px-3 py-1.5 bg-gray-50 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleFormControlInput1"
        placeholder="Content..."
        v-model="title"
        data-test="title"
      />
    </div>
    <div
      className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8 -mt-3"
    >
      <div class="px-2 py-2 bg-purple-100 rounded-md shadow-md">
        <label
          for="exampleFormControlInput1"
          class="inline-block mb-2 font-semibold text-gray-600 form-label"
        >
          Markdown Editor
        </label>
        <div
          class="h-48 mx-2 overflow-y-auto font-serif text-base font-normal text-gray-800 transition duration-300 bg-gray-200 border-2 border-gray-300 border-dashed rounded outline-none cursor-pointer dark:border-gray-700 focus:bg-white"
          contenteditable
          ref="contentEditable"
          @input="handleInput"
          data-test="content"
        />
      </div>

      <div class="px-2 py-2 bg-purple-100 rounded-md shadow-md">
        <label
          for="exampleFormControlInput1"
          class="inline-block mb-2 font-semibold text-gray-600 form-label"
        >
          HTML Preview
        </label>
        <div
          className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-48 bg-gray-200 overflow-y-auto"
        >
          <div v-html="html" />
        </div>
      </div>
      <button
        type="submit"
        @click="save"
        data-test="submit"
        class="text-white bg-yellow-700 w-32 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit Post
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Post } from '@/mocks';
import { defineComponent, onMounted, ref, watchEffect, watch } from 'vue';
import { parse } from 'marked';
import highlight from 'highlight.js';
import debounce from 'lodash/debounce';

export default defineComponent({
  name: 'PostWriter',
  props: {
    post: {
      type: Object as () => Post,
      required: true,
    },
  },

  emits: {
    save: (post: Post) => {
      return true;
    },
  },

  setup(props, ctx) {
    const title = ref(props.post.title);
    const content = ref('## Title\nEnter your post content...');
    const contentEditable = ref<HTMLDivElement | null>(null);
    const html = ref('');

    const parseHtml = (str: string) => {
      html.value = parse(str, {
        gfm: true,
        breaks: true,
        highlight: (code: string) => {
          return highlight.highlightAuto(code).value;
        },
      });
    };

    // watchEffect(() => {
    //   html.value = parse(content.value, {
    //     gfm: true,
    //     breaks: true,
    //     highlight: (code: string) => {
    //       return highlight.highlightAuto(code).value;
    //     },
    //   });
    // });

    watch(
      content,
      debounce((newVal) => {
        parseHtml(newVal);
      }, 250),
      {
        immediate: true,
      }
    );

    const handleInput = () => {
      if (!contentEditable.value) {
        throw Error('This should never happen');
      }
      content.value = contentEditable.value?.innerText || '';
    };

    onMounted(() => {
      if (!contentEditable.value) {
        throw Error('This should never happen');
      }
      contentEditable.value.innerText = content.value;
    });

    const save = () => {
      const newPost: Post = {
        ...props.post,
        title: title.value,
        html: html.value,
        markdown: content.value,
      };
      ctx.emit('save', newPost);
    };

    return {
      save,
      html,
      title,
      content,
      contentEditable,
      handleInput,
    };
  },
});
</script>

<style></style>
