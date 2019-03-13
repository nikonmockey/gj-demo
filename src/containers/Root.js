import React, { Component } from 'react'
import { ConnectedRouter as Router } from 'react-router-redux'

import { IntlProvider } from 'containers/IntlProvider'
import { history } from 'redux/store'


export default class Root extends Component {
  render() {
    const { locale, children } = this.props

    return (
      <IntlProvider locale={locale}>
        <Router history={history}>
          {children}
        </Router>
      </IntlProvider>
    )
  }
}


