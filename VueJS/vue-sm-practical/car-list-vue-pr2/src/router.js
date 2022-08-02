import { createWebHistory, createRouter } from 'vue-router'
import CarPage from './components/CarPage.vue'
import HomePage from './pages/HomePage.vue'
import NotFoundVue from './pages/NotFound.vue'

const routes = [
  {
    path: '/car/:id',
    name: 'CarPage',
    component: CarPage,
    props: true
  },
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundVue
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
