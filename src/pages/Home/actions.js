import { request, api } from 'helpers'
import reducers from 'redux/reducers'
import { user, subaccounts } from 'redux/actions'


export const getPayments = body =>
  request
    .post(api.payments_stats, { body })
    .then( ({ data }) => reducers.home.setPayments(data) )

export const getWorkers = body =>
  request
    .post(api.workers, { body })
    .then( data => reducers.home.setWorkers(data) )

export const getWorkersQTY = body =>
  request
    .post(api.workers_QTY, { body })
    .then( ({ active, inactive, count, }) => reducers.home.setWorkersQTY({ active, inactive, count }) )

export const init = coin => {
  getPayments(coin)
  getWorkers({ subaccounts: [1], coin: coin.code, active: "all", page: 0, pageSize: 10, search: "" })
  getWorkersQTY(coin)

  user.getBalance({ coin: coin.code })
  user.getCoins()

  subaccounts.getHashrate({ coin: coin.code, period: "24h", points: "30m" })
  subaccounts.getSubaccounts({ coin: coin.code, page: 0, pageSize: 10, extended: true })
  subaccounts.getSubaccountsStats({ coin: coin.code })
  subaccounts.getPaymentsAll({ coin: coin.code, period: 'full' })
}


export const addWorker = worker => reducers.home.addWorker(worker)
