import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://vue-fake-server.herokuapp.com',
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const apiClient2 = axios.create({
  baseURL: 'https://testapi.io/api/dartya/resource',
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  // eslint-disable-next-line space-before-function-paren
  getCars() {
    return apiClient.get('/cardata')
  },
  getCar (id) {
    return apiClient.get(`/cardata/${id}`)
  },
  postCar (car) {
    return apiClient.post('/cardata', car)
  },
  deleteCar (car) {
    return apiClient.delete(`/cardata/${car.id}`)
  },
  putCar (car) {
    return apiClient.put(`/cardata/${car.id}`, car)
  },
  postUser (user) {
    apiClient2.post('/users', user)
  },
  getUsers () {
    return apiClient2.get('/users')
  }
}
