import { request, api } from 'helpers'
import reducers from 'redux/reducers'
import { nav } from 'redux/actions'


export const setTheme = theme => reducers.user.setTheme(theme)
export const setCoin = coinId => reducers.user.setCoin(coinId)

export const setLocale = locale => {
  window.localStorage.setItem('locale', locale)
  reducers.user.setLocale(locale)
  window.location.reload(false)
}

export const getProfile = () =>
  request
    .get(api.profile)
    .then(reducers.user.setProfile)

export const getCoins = () =>
  request
    .get(api.coins)
    .then(reducers.user.setCoins)

export const getBalance = body =>
  request
    .post(api.balance, { body })
    .then( ({ data }) => reducers.user.setBalance(data) )

export const putProfile = body =>
  request
    .post(api.profile, { body })
    .then(reducers.user.setProfile)

export const putGACode = body =>
  request
    .post(api.profile, { body })
    .then(reducers.user.setProfile)
