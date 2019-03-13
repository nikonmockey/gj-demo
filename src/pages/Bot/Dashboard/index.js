import React, { Component } from 'react'
import cx from 'classnames'
import { connect } from 'redaction'
import { bot } from 'redux/actions'

import { Container, Row, Flex } from 'components/layouts'
import { Button } from 'components/UI'
import { Balance, PopUpButton } from 'components/common'
import DemoWallet from 'assets/demoWallet'

import {
  OrderHistory,
  Graphic,
  ExpectedBalance,
  Income,
  Status,
  Bonus,
} from './components'

import styles from './styles.module.scss'


class Dashboard extends Component {
  state = {
    clickPopUp: false
  }

  handleClickOnPopUp = () => this.setState({ clickPopUp: true })

  renderPopUp = () => {
    if (!this.state.clickPopUp) {
      return (<PopUpButton
        text={'Активируйте Демо счет и получите $10.000 на аккаунт торгового бота'}
        activeText={'АКТИВИРОВАТЬ'}
        onClick={this.handleClickOnPopUp}
        marginRight={'-18%'}
        buttonItem={<span style={{ fontWeight: 900, fontSize: 13, fontFamily: 'DIN Pro', color: '2b2c3b' }}>DEMO</span>}/>)
    }

    return (<PopUpButton
      text={'Пополните счет на суму от $1000, чтобы активировать своего торгового бота'}
      activeText={'Подключить'}
      onClick={this.handleClickOnPopUp}
      marginRight={'-18%'}
      buttonItem={<DemoWallet style={{ width: 40 }}/>}/>)
  }

  componentDidMount() {
    const { profile } = this.props

    bot.getBalance(profile && profile.id)
  }

  render() {
    const { theme, balance } = this.props
    const isNight = theme === 'night'

    return (
      <Flex column fullWidth>

        <Row>
          <Container title="YOUR_BALANCE" third>
            <Balance />
          </Container>
          <Container title="EXPECTED_BALANCE" third>
            <ExpectedBalance forecast={balance.forecast} />
          </Container>
          <Container title="CURRENT_INCOMMMING" third>
            <Income profit={balance.profit} isNight={isNight}/>
          </Container>
        </Row>

        <Row>
          <Flex column third>
            <Container title="TRUST_BONUS" mini>
              <Bonus isNight={isNight}/>
            </Container>
            <Container title="STATUS_BOT" mini>
              <Status isNight={isNight} />
            </Container>
          </Flex>
          <Container title="INCOME_GRAPH" third2>
            <Graphic />
          </Container>
        </Row>

        <Row>
          <Container title="ORDER_HISTORY" full>
            <OrderHistory />
          </Container>
        </Row>
        {this.renderPopUp()}
      </Flex>
    )
  }
}

Dashboard = connect({
  theme: 'user.theme',
  balance: 'bot.balance',
  profile: 'user.profile',
})(Dashboard)

export { Dashboard }
