import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue'),
  },
  {
    path: '/trendings',
    name: 'Trendings',
    component: () => import('../views/TrendingListings.vue'),
  },
  {
    path: '/exchanges',
    name: 'Exchanges',
    component: () => import('../views/Exchanges.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
