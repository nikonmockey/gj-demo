import React, { Component } from 'react'
import cx from 'classnames'
import { connect } from 'redaction'

import { Container, Row, Flex } from 'components/layouts'
import { Button } from 'components/UI'

import {
  Tables,
} from './components'

import styles from './styles.module.scss'


class Payments extends Component {
  constructor () {
    super()
    this.state = {active: 1}
    this.handleClickOne = this.handleClickOne.bind(this)
    this.handleClickTwo = this.handleClickTwo.bind(this)
    this.handleClickThree = this.handleClickThree.bind(this)
  }

  handleClickOne () {
    this.setState({active: 1})
  }

  handleClickTwo () {
    this.setState({active: 2})
  }

  handleClickThree () {
    this.setState({active: 3})
  }

  renderTable () {
    switch (this.state.active) {
      case 1:
        return <Tables.Charges />
        break;
      case 2:
        return <Tables.Withdrawals />
        break;
      case 3:
        return <Tables.Replenishment />
        break;
    }
  }

  render() {
    const { active } = this.state
    const { theme } = this.props
    const isNight = theme === 'night'

    return (
      <Flex column fullWidth>

        <Button>ЭКСПОРТ В XLS</Button>
        <Row>
          <Container only>
            <Button
              className={cx(
                styles.switchBtn,
                active === 1 && styles.switchBtnActive,
                isNight && styles.btnNight
              )}
              onClick={this.handleClickOne}>Пополнение</Button>
            <Button
              className={cx(
                styles.switchBtn,
                active === 2 && styles.switchBtnActive,
                isNight && styles.btnNight
              )}
              onClick={this.handleClickTwo}>Начисления</Button>
            <Button
              className={cx(
                styles.switchBtn,
                active === 3 && styles.switchBtnActive,
                isNight && styles.btnNight
              )}
              onClick={this.handleClickThree}>Выводы</Button>
             {this.renderTable()}
          </Container>
        </Row>

      </Flex>
    )
  }
}

Payments = connect({
  theme: 'user.theme',
})(Payments)

export { Payments }
