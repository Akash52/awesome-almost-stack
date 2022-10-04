import { mount } from "@vue/test-utils";
import Navbar from "../../src/components/Navbar.vue";
import Signup from "../../src/components/SignUp.vue";
import { Store } from "@/store";
// import { createRouter, createWebHistory } from 'vue-router';

// createRouter({
//   history: createWebHistory(),
//   routes: [],
// }),

describe("Navbar", () => {
  it("shows a signup modal via teleport", async () => {
    const store = new Store({
      posts: {
        all: new Map(),
        ids: [],
        loaded: false,
      },
      authors: {
        ids: [],
        all: new Map(),
        loaded: false,
        currentUserId: undefined,
      },
    });

    const el = document.createElement("div");
    el.id = "modal";
    document.body.appendChild(el);

    const wrapper = mount(Navbar, {
      attachTo: document.body,
      global: {
        components: {
          RouterLink: {
            template: `<div></div>`,
          },
        },
        plugins: [store],
      },
    });

    await wrapper.get('[data-test="sign-up"]').trigger("click");

    const form = wrapper.getComponent(Signup);
    // console.log(form);
    // console.log(document.body.outerHTML)
    expect(document.body.outerHTML).toContain(
      "This field must be between 10 and 20 characters"
    );
    await form.get("#Username").setValue("Username");
    await form.get("#Password").setValue("dawdwadwadd");
    expect(document.body.outerHTML).not.toContain(
      "This field must be between 10 and 20 characters"
    );

    await form.trigger("submit.prevent");
  });
});
