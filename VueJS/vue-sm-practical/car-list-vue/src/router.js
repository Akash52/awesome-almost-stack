import { createWebHistory, createRouter } from 'vue-router'
import CarCardVue from './components/CarCard.vue'
import HomeComp from './components/Home.vue'
const routes = [
  {
    path: '/car/:id',
    name: 'CarCard',
    component: CarCardVue
  },
  {
    path: '/',
    name: 'Home',
    component: HomeComp
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
