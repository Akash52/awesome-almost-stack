import ApiService from '@/services/ApiService'

const state = {
  users: [],
  loading: true
}
const getters = {
  users: state => state.users
}

const actions = {
  // eslint-disable-next-line space-before-function-paren
  async addUser({ commit }, user) {
    const response = await ApiService.postUser(user)
    commit('setUsers', response)
  },
  // eslint-disable-next-line space-before-function-paren
  async getUsers({ commit }) {
    const response = await ApiService.getUsers()
    commit('setUsers', response.data.data)
  }
}
const mutations = {
  // eslint-disable-next-line space-before-function-paren
  setUsers(state, users) {
    state.users = users
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
