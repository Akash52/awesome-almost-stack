import { createWebHistory, createRouter } from 'vue-router'
import CarPage from './pages/CarPage.vue'
import HomePage from './pages/HomePage.vue'
import NotFoundVue from './pages/NotFound.vue'
import EditCarForm from '@/components/EditCarForm.vue'
import AddCarForm from '@/components/AddCarForm.vue'
import UserLoginForm from './components/UserLoginForm '
import UserRegisterForm from './components/UserRegisterForm'
import store from './store'

const routes = [
  {
    path: '/car/:id',
    name: 'CarPage',
    component: CarPage,
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/editCar/:id',
    name: 'EditCar',
    component: EditCarForm,
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/addCar',
    name: 'AddCar',
    component: AddCarForm,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'UserLogin',
    component: UserLoginForm,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/register',
    name: 'UserRegister',
    component: UserRegisterForm,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundVue,
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/login')
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/')
  } else {
    next()
  }
})

export default router
