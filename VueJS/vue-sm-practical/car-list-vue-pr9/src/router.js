import { createWebHistory, createRouter } from 'vue-router'
import store from './store'

const routes = [
  {
    path: '/car/:id',
    name: 'CarPage',
    component: import('./pages/CarPage.vue'),
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/',
    name: 'HomePage',
    component: import('./pages/HomePage.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/editCar/:id',
    name: 'EditCar',
    component: import('./components/EditCarForm.vue'),
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/addCar',
    name: 'AddCar',
    component: import('./components/AddCarForm.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'UserLogin',
    component: import('./components/UserLoginForm .vue'),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/register',
    name: 'UserRegister',
    component: import('./components/UserRegisterForm.vue'),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: import('./pages/NotFound.vue'),
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
