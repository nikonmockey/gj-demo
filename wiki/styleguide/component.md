### Example:

```
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'redaction'
import actions from 'redux/actions'
import { Stuff } from 'some-npm-package'
import { mapValues } from 'lodash'
import { links } from 'helpers'

import { FormattedMessage } from 'sb-react-intl'
import messages from './messages'

import cssModules from 'react-css-modules'
import styles from './Component.styl'

import Container from 'containers/Container'
import Component from 'components/Component/Component'
import LocalComponent from './LocalComponent'
import someImage from './images/some.svg'


@connect({
  field: 'duck.field',
  selectorField: (state, props) => props.needToSelect && selectMyShit(state)
})
@cssModules(styles, { allowMultiple: true })
export default class AbstractComponent extends Component {

  static contextTypes = {
    someContext: PropTypes.object.isRequired,
  }

  static propTypes = {
    someProp: PropTypes.string,
    children: PropTypes.any,
  }

  state = {
    someStateField: null,
  }

  componentDidMount() {
    actions.duck.someAction()
  }

  handleClick = (event) => {
    event.preventDefault()
  }

  render() {
    const { someContext } = this.context
    const { someStateField } = this.state
    const { someProp, children } = this.props

    return (
      <Container>
        {
          Boolean(someContext) && (
            <Component/>
          )
        }
        <LocalComponent
          onClick={this.handleClick}
          prop={someStateField}
        />
        {children}
      </Container>
    )
  }
}
```

