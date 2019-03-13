import * as commonReducers from 'helpers/commonReducers'


const initialState = {
  balance: { forecast: 0, profit: 0 },
  payouts: [],
  orders: [],
}


const setBalance = (state, balance) => ({
  ...state,
  balance,
})

const setPayouts = (state, payouts) => ({
  ...state,
  payouts,
})

const setOrders = (state, orders) => ({
  ...state,
  orders,
})



export default {
  initialState,
  setBalance,
  setPayouts,
  setOrders,
  ...commonReducers,
}
