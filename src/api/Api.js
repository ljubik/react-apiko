export const Auth = {
  _token: null,

  get isLoggetIn() {
    return !!this._token
  },

  init() {
    try {
      const token = window.localStorage.getItem('token')
      this._token = JSON.parse(token)
    } catch (err) {
      console.log(err)
    }
  },

  login() {
    //Todo some reqvest to server
    this._token = 'token'

    this._storeToken()
  },

  logout() {
    this._token = null
    try {
      window.localStorage.removeItem('token')
      this._token = JSON.parse('token')
    } catch (err) {
      console.log(err)
    }
  },

  _storeToken() {
    //використовувати  try-catch при localStorage бо інколи не працює в приватному режимі і падає апка
    try {
      window.localStorage.setItem('token', JSON.stringify(this._token))
    } catch (err) {
      console.log(err)
    }
  },
}

export function init() {
  Auth.init()
}
