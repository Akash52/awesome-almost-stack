let timer

export default {
  // eslint-disable-next-line space-before-function-paren
  async signin(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'login'
    })
  },
  // eslint-disable-next-line space-before-function-paren
  async signup(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup'
    })
  },
  // eslint-disable-next-line space-before-function-paren
  async auth(context, payload) {
    const mode = payload.mode
    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBlh6elTPJ7fQxdjE4TgBQraBWXiqk0fcY'

    if (mode === 'signup') {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBlh6elTPJ7fQxdjE4TgBQraBWXiqk0fcY'
    }
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    })

    const responseData = await response.json()

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to authenticate. Check your login data.'
      )
      throw error
    }

    const expiresIn = +responseData.expiresIn * 1000
    // const expiresIn = 5000;
    const expirationDate = new Date().getTime() + expiresIn

    localStorage.setItem('token', responseData.idToken)
    localStorage.setItem('userId', responseData.localId)
    localStorage.setItem('tokenExpiration', expirationDate)
    localStorage.setItem('email', responseData.email)

    timer = setTimeout(function () {
      context.dispatch('autoLogout')
    }, expiresIn)

    context.commit('setUser', {
      email: responseData.email,
      token: responseData.idToken,
      userId: responseData.localId
    })
  },
  // eslint-disable-next-line space-before-function-paren
  tryLogin(context) {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    const tokenExpiration = localStorage.getItem('tokenExpiration')

    const expiresIn = +tokenExpiration - new Date().getTime()

    if (expiresIn < 0) {
      return
    }

    timer = setTimeout(function () {
      context.dispatch('autoLogout')
    }, expiresIn)

    if (token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId
      })
    }
  },
  // eslint-disable-next-line space-before-function-paren
  logout(context) {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('tokenExpiration')
    localStorage.removeItem('email')

    clearTimeout(timer)

    context.commit('setUser', {
      token: null,
      userId: null,
      tokenExpiration: null
    })
  },
  // eslint-disable-next-line space-before-function-paren
  autoLogout(context) {
    context.dispatch('logout')
    context.commit('setAutoLogout')
  }
}
