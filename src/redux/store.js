import { routerReducer as router, routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import { createStore, combineReducers } from 'redaction'
import { reducer as form } from 'redux-form'
import reducers from './_reducers'


export const history = createBrowserHistory()

export const store = createStore({
  reducers: {
    ...combineReducers(reducers),
    router,
    form
  },
  middleware: [
    routerMiddleware(history),
  ],
})
