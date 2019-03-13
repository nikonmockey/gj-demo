import React from 'react'
import { Route } from 'react-router-dom'

import Routes from 'routes'
import Root from 'containers/Root'

import { connect } from 'redaction'


const App = ({ locale = "ru" }) => (
  <Root locale={locale}>
    <Route component={Routes} />
  </Root>
)

export default connect({
  locale: 'user.locale',
})(App)
