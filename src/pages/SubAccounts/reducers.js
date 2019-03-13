import * as commonReducers from 'helpers/commonReducers'


const initialState = {
  sub_stats: {},
  hashrate: [],
  payments_all: [],
  subaccounts: [],
}

const setSubaccounts = (state, subaccounts) => ({
  ...state,
  subaccounts,
})

const setHashrate = (state, hashrate) => ({
  ...state,
  hashrate,
})

const setSubaccountsStats = (state, sub_stats) => ({
  ...state,
  sub_stats,
})

const setPaymentsAll = (state, payments_all) => ({
  ...state,
  payments_all,
})


export default {
  initialState,

  setSubaccounts,
  setHashrate,
  setSubaccountsStats,
  setPaymentsAll,

  ...commonReducers,
}
