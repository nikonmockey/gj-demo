import { mapValues } from 'lodash'
// const HOST = process.env.REACT_APP_SERVER


// Да, костыль... todo: убрать

const api_base = '/back-api/'
const bot_base = 'http://dev.goldjob.com/api/'

const createLinks = (links, base) => mapValues(links, (link => `${base}${link}`))

export const api = createLinks({
  profile: 'goldjob/user-data',
  balance: 'balance/total',
  payments_stats: 'payments/stats',
  coins: 'coins',

  subaccounts: 'subaccounts',
  sub_create: 'subaccount/create',
  sub_details: 'subaccounts/details',
  sub_stats_hash: 'subaccounts/all/stats',
  sub_stats: 'subaccounts/stats/periods',
  payments_all: 'subaccounts/all/payments/stats',

  workers: 'workers/fetch',
  workers_QTY: 'workers/count',
}, api_base)

export const bot = createLinks({
  login: 'user/login',
  register: 'user/signup',
  recover: 'requestPasswordReset',
  user: 'user'
}, bot_base)

export const REsitekey = '6LftaTkUAAAAAF3fQaXpexWASwjUD5vdvcEf4aVM'
