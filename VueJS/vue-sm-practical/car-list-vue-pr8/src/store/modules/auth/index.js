import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
  // eslint-disable-next-line space-before-function-paren
  state() {
    return {
      email: null,
      userId: null,
      token: null,
      didAutoLogout: false
    }
  },
  mutations,
  actions,
  getters
}
