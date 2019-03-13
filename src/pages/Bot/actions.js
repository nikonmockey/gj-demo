import { request, bot } from 'helpers'
import reducers from 'redux/reducers'
import { user, subaccounts } from 'redux/actions'


export const getBalance = userId =>
  request
    .get(`${bot.user}/${userId}/currentBalance`)
    .then( ({ data }) => reducers.home.setBalance(data) )


export const getPayouts = userId =>
  request
    .get(`${bot.user}/${userId}/payouts`)
    .then( ({ data }) => reducers.home.setPayouts(data) )


export const getOrders = userId =>
  request
    .get(`${bot.user}/${userId}/orders`)
    .then( ({ data }) => reducers.home.setOrders(data) )


// export const init = coin => {

// }

