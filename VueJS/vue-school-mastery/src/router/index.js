import HomePage from '@/pages/HomePage';
import NotFound from '@/pages/NotFound';
import ThreadShow from '@/pages/ThreadShow.vue';
import FroumPageVue from '@/pages/FroumPage';
import { createRouter, createWebHistory } from 'vue-router';
import sourceData from '@/data.json';
import CategoryVue from '@/pages/CategoryPage.vue';
import ProfilePageVue from '@/pages/ProfilePage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/me',
    name: 'Profile',
    component: ProfilePageVue,
    meta: {
      toTop: true,
      smoothScroll: true,
    },
  },
  {
    path: '/me/edit',
    name: 'ProfileEdit',
    component: ProfilePageVue,
    props: {
      edit: true,
    },
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: CategoryVue,
    props: true,
  },
  {
    path: '/forum/:id',
    name: 'FroumPage',
    component: FroumPageVue,
    props: true,
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: ThreadShow,
    props: true,
    beforeEnter: (to, from, next) => {
      //check if the thread exists
      //if exists continue
      //if not redirect to 404
      if (sourceData.threads.find((thread) => thread.id === to.params.id)) {
        next();
      } else {
        next({
          name: 'NotFound',
          params: { pathMatch: to.path.substring(1).split('/') },
          // preserve existing query and hash
          query: to.query,
          hash: to.hash,
        });
      }
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    const scroll = {};
    if (to.meta.toTop) scroll.top = 0;
    if (to.meta.smoothScroll) scroll.behavior = 'smooth';
    return scroll;
  },

  // scrollBehavior(to, from, savedPosition) {
});
