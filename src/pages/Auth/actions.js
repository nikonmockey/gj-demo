import { request, api } from 'helpers'
import reducers from 'redux/reducers'
import { nav } from 'redux/actions'

const itemKey = 'token'


const setToken = (token, user) => {
  window.localStorage[token ? 'setItem' : 'removeItem'](itemKey, token)
  reducers.home.setToken(token)
  reducers.home.setLoggedIn(Boolean(token))
  user && reducers.home.setProfile(user)
}


export const login = body =>
  request
    .post(api.login, { body, noToken: true })
    .then( ({ user, access_token: token }) => {
      setToken(token, user)
      nav.push(`/`)
    }, err => err )


export const restore = body =>
  request
    .post(api.new_pass, { body, noToken: true })
    .then( data => data, data => data)


export const logout = () => setToken()


export const register = body =>
  request
    .post(api.register, { body, noToken: true })
    .then( ({ data, token }) => {
      setToken(token, data)
      nav.push(`/`)
      return data
    }, data => data)


// end
//
//
