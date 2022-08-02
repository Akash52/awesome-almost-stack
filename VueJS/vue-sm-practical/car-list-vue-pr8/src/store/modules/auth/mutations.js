export default {
  // eslint-disable-next-line space-before-function-paren
  setUser(state, payload) {
    state.token = payload.token
    state.userId = payload.userId
    state.tokenExpiration = payload.tokenExpiration
  }
}
