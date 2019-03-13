import { request, api } from 'helpers'
import reducers from 'redux/reducers'
// import { user } from 'redux/actions'


export const getSubaccounts = body =>
  request
    .post(api.subaccounts, { body })
    .then( ({ data }) =>
        reducers.subaccounts.setSubaccounts(data) )

export const getHashrate = body =>
  request
    .post(api.sub_stats_hash, { body })
    .then( ({ data }) =>
        reducers.subaccounts.setHashrate(data) )

export const getSubaccountsStats = body =>
  request
    .post(api.sub_stats, { body })
    .then( ({ data }) =>
        reducers.subaccounts.setSubaccountsStats(data) )

export const getPaymentsAll = body =>
  request
    .post(api.payments_all, { body })
    .then( ({ data }) =>
        reducers.subaccounts.setPaymentsAll(data) )


export const addSubaccount = body =>
  request
    .post(api.sub_create, { body })
    .then( getSubaccounts({ coin: "BTC", page: 0, pageSize: 10, extended: true }) )
