import ApiService from '@/services/ApiService'

const state = {
  cars: [],
  car: {},
  loading: true
}
const getters = {
  cars: state => state.cars,
  car: state => state.car,
  loading: state => state.loading
}

const actions = {
  // eslint-disable-next-line space-before-function-paren
  async fetchCars({ commit }) {
    const response = await ApiService.getCars()
    commit('setCars', response.data)
    commit('setLoading', false)
  },
  // eslint-disable-next-line space-before-function-paren
  async addCar({ commit }, car) {
    const response = await ApiService.postCar(car)
    commit('addCar', response.data)
  },
  // eslint-disable-next-line space-before-function-paren
  async deleteCar({ commit }, car) {
    await ApiService.deleteCar(car)
    commit('deleteCar', car)
  },
  // eslint-disable-next-line space-before-function-paren
  async getCar({ commit }, id) {
    const response = await ApiService.getCar(id)
    commit('setCar', response.data)
  },
  // eslint-disable-next-line space-before-function-paren
  async updateCar({ commit }, car) {
    const response = await ApiService.putCar(car)
    commit('updateCar', response.data)
  }
}
const mutations = {
  // eslint-disable-next-line space-before-function-paren
  setCars(state, cars) {
    state.cars = cars
  },
  // eslint-disable-next-line space-before-function-paren
  setLoading(state, loading) {
    state.loading = loading
  },
  // eslint-disable-next-line space-before-function-paren
  addCar(state, car) {
    state.cars.push(car)
  },
  // eslint-disable-next-line space-before-function-paren
  deleteCar(state, car) {
    state.cars = state.cars.filter(c => c.id !== car.id)
  },
  // eslint-disable-next-line space-before-function-paren
  updateCar(state, car) {
    const index = state.cars.findIndex(c => c.id === car.id)
    state.cars.splice(index, 1, car)
  },
  // eslint-disable-next-line space-before-function-paren
  setCar(state, car) {
    state.car = car
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
