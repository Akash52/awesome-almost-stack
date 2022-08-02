import { createWebHistory, createRouter } from 'vue-router'
import CarPage from './pages/CarPage.vue'
import HomePage from './pages/HomePage.vue'
import NotFoundVue from './pages/NotFound.vue'
import EditCarForm from '@/components/EditCarForm.vue'
import AddCarForm from '@/components/AddCarForm.vue'

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
    path: '/editCar/:id',
    name: 'EditCar',
    component: EditCarForm,
    props: true
  },
  {
    path: '/addCar',
    name: 'AddCar',
    component: AddCarForm
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
