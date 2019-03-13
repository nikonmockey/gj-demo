import React, { Component } from 'react'
import cx from 'classnames'
import { connect } from 'redaction'

import { Container, Row, Flex } from 'components/layouts'
import { Button } from 'components/UI'

import {
  Tables,
} from './components'

import styles from './styles.module.scss'


class PartnerPaymentsHistory extends Component {
  constructor () {
    super()
    this.state = {active: 1}
    this.handleClickOne = this.handleClickOne.bind(this)
    this.handleClickTwo = this.handleClickTwo.bind(this)
  }

  handleClickOne () {
    this.setState({active: 1})
  }

  handleClickTwo () {
    this.setState({active: 2})
  }

  renderTable () {
    switch (this.state.active) {
      case 1:
        return <Tables.Charges />
        break;
      case 2:
        return <Tables.Withdrawals />
        break;
      default:

    }
  }
  render() {
    const { active } = this.state
    const { theme } = this.props
    const isNight = theme === 'night'

    return (
      <Flex column fullWidth>

        <Row>
          <Container third>
            <Button className={cx(styles.switchBtn, active === 1 && styles.switchBtnActive,
              isNight && styles.btnNight)}
              onClick={this.handleClickOne}>Начисления</Button>
            <Button className={cx(styles.switchBtn, active === 2 && styles.switchBtnActive,
              isNight && styles.btnNight)}
              onClick={this.handleClickTwo}>Выводы</Button>
            {this.renderTable()}
          </Container>
        </Row>

      </Flex>
    )
  }
}

PartnerPaymentsHistory = connect({
  theme: 'user.theme',
})(PartnerPaymentsHistory)

export { PartnerPaymentsHistory }
