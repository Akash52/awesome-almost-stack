import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue";
import NewPostVue from "./components/NewPost.vue";
import { Store } from "@/store";
import ShowPost from "./components/ShowPost.vue";
import EditPost from "./components/EditPost.vue";

export function routerWithStore(store: Store) {
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/posts/:id",
        component: ShowPost,
      },
      {
        path: "/posts/:id/edit",
        component: EditPost,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/posts/new",
        component: NewPostVue,
        meta: {
          requiresAuth: true,
        },
      },
    ],
  });

  router.beforeEach((to, from, next) => {
    const auth = !!store.getState().authors.currentUserId;

    if (!to.meta.requiresAuth) {
      next();
      return;
    }

    if (to.meta.requiresAuth && auth) {
      next();
    } else {
      next({
        path: "/",
      });
    }
  });

  return router;
}
