import { push as pushAction } from 'react-router-redux'
import { dispatch } from 'helpers'


export const push = (...params) => dispatch(pushAction(...params))
