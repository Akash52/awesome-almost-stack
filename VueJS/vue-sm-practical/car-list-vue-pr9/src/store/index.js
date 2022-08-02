import { createStore } from 'vuex'
import cars from './modules/cars.js'
import users from './modules/users.js'
import auth from './modules/auth/index.js'

export default createStore({
  modules: {
    cars: cars,
    users: users,
    auth: auth
  }
})
