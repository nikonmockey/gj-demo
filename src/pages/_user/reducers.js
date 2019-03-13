import * as commonReducers from 'helpers/commonReducers'


const initialState = {
  profile: {},
  balance: { total: 0 },
  coin: { id: 1, code: 'BTC' },
  coins: [],
  theme: 'day',
  locale: window.localStorage.getItem('locale') || 'ru',
}

const setProfile = (state, profile) => ({
  ...state,
  profile,
})

const setBalance = (state, balance) => ({
  ...state,
  balance,
})

const setCoins = (state, coins) => ({
  ...state,
  coins,
})

const setCoin = (state, coin) => ({
  ...state,
  coin,
})

const setTheme = (state, theme) => ({
  ...state,
  theme,
})

const setLocale = (state, locale) => ({
  ...state,
  locale,
})


export default {
  initialState,
  setProfile,
  setBalance,
  setCoins,
  setCoin,
  setTheme,
  setLocale,
  ...commonReducers,
}
