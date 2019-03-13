import * as commonReducers from 'helpers/commonReducers'


const initialState = {
  payments: {},
  workers: [],
  workers_QTY: {},
  workers_checked: [],
}


const setPayments = (state, payments) => ({
  ...state,
  payments,
})

const setWorkers = (state, workers) => ({
  ...state,
  workers,
})

const setWorkersQTY = (state, workers_QTY) => ({
  ...state,
  workers_QTY,
})

const addWorker = (state, worker) => ({
  ...state,
  workers_checked: [ ...state.workers_checked, worker ]
})


export default {
  initialState,
  setPayments,
  setWorkers,
  setWorkersQTY,
  addWorker,
  ...commonReducers,
}
