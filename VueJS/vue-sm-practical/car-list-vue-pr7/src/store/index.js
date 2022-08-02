import { createStore } from 'vuex'
import cars from './modules/cars.js'
import users from './modules/users.js'

export default createStore({
  modules: {
    cars: cars,
    users: users
  }
})
