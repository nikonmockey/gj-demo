import * as commonReducers from 'helpers/commonReducers'


const initialState = {
  isLoggedIn: true,
  // isLoggedIn: Boolean(window.localStorage.getItem('token')),
  token: window.localStorage.getItem('token'),
}


const setToken = (state, token) => ({
  ...state,
  token,
})

const setLoggedIn = (state, isLoggedIn) => ({
  ...state,
  isLoggedIn,
})


export default {
  initialState,
  setToken,
  setLoggedIn,
  ...commonReducers,
}
