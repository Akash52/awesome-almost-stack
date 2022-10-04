import ShowPost from "@/components/ShowPost.vue";
import { today } from "@/mocks";
import { Store } from "@/store";
import { mount, flushPromises } from "@vue/test-utils";
import { routerWithStore } from "../../src/router";

describe("ShowPost", () => {
  it("does not show edit button when not authenticate", async () => {
    const store = new Store({
      posts: {
        ids: [today.id],
        all: new Map([[today.id, today]]),
        loaded: true,
      },
      authors: {
        ids: [],
        all: new Map(),
        loaded: true,
        currentUserId: undefined,
      },
    });

    const router = routerWithStore(store);

    router.push(`/posts/${today.id}`);
    await router.isReady();

    const wrapper = mount(ShowPost, {
      global: {
        plugins: [store, router],
      },
    });

    await flushPromises();

    expect(wrapper.find('[data-test="can-edit"]').exists()).toBe(false);
  });
  it.only("does not show edit button when not authorized", async () => {
    const store = new Store({
      posts: {
        ids: [today.id],
        all: new Map([[today.id, today]]),
        loaded: true,
      },
      authors: {
        ids: ["10000"],
        all: new Map([
          [
            "10000",
            {
              id: "10000",
              username: "username",
            },
          ],
        ]),
        loaded: true,
        currentUserId: undefined,
      },
    });

    const router = routerWithStore(store);

    router.push(`/posts/${today.id}`);
    await router.isReady();

    const wrapper = mount(ShowPost, {
      global: {
        plugins: [store, router],
      },
    });

    await flushPromises();

    expect(wrapper.find('[data-test="can-edit"]').exists()).toBe(false);
  });
  it("show edit button when authorized", async () => {
    console.log("Wordl");
  });
});
