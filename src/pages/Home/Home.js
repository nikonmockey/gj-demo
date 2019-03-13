import React, { Component } from 'react'
import { connect } from 'redaction'
import cx from 'classnames'
import { request } from 'helpers'

import { home } from 'redux/actions'

import { Container, Row, Flex } from 'components/layouts'
import { Button } from 'components/UI'
import { Currency, Balance, PopUpButton } from 'components/common'
import Gpu from 'assets/gpu'

import {
  Graphic,
  Income,
  Hashrate,
  Speedometer,
  Tables,
} from './components'

import styles from './styles.module.scss'


class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      clickPopUp: false
    }
  }
  componentDidMount() {
    const { coin } = this.props

    home.init({ code: coin.code })
  }

  handleClickOnPopUp = () => {
    this.setState({ clickPopUp: true })
  }

  renderPopUp = () => {
    if (!this.state.clickPopUp) {
      return (<PopUpButton
        text={'Активируйте Демо, чтобы посмотреть работу Майнинг Dashboard'}
        activeText={'АКТИВИРОВАТЬ'}
        onClick={this.handleClickOnPopUp}
        marginRight={'-18%'}
        buttonItem={<span style={{ fontWeight: 900, fontSize: 13, fontFamily: 'DIN Pro', color: '2b2c3b' }}>DEMO</span>}/>)
    }

    return (<PopUpButton
      text={'Подключите оборудование по инструкции, чтобы начать майнить с пулом GoldJob'}
      activeText={'Подключить'}
      onClick={this.handleClickOnPopUp}
      marginRight={'-18%'}
      buttonItem={<Gpu style={{ width: 40 }}/>}/>)
  }

  render() {
    const {
      coin,

      balance,
      payments,
      sub_stats,
      hashrate,
      payments_all,
      workers,
      workers_QTY,

      theme,

    } = this.props

    const isNight = theme === 'night'

    return (
      <Flex column fullWidth>
        <Currency />
        <Row>
          <Container title="INCOME_GRAPH" third2>
            <Graphic.Income data={payments_all}/>
          </Container>
          <Flex column third>
            <Container title="YOUR_BALANCE" mini>
              <Balance balance={balance && balance.total} coin={coin} />
            </Container>
            <Container title="YOUR_INCOME" mini>
              <Income payments={payments} isNight={isNight} />
            </Container>
          </Flex>
        </Row>

        <Row>
          <Container title="YOUR_ACCOUNT_HASHRATE" third>
            <Hashrate stats={sub_stats} isNight={isNight} />
          </Container>
          <Container title="HASHRATE" third2>
            <Graphic.Hashrate data={hashrate}/>
          </Container>
        </Row>

        <Row>
          <Container title="SUBACCOUNT_STATS" quarter3>
            <Tables.Subaccounts />
          </Container>
          <Container title="YOUR_WORKERS" quarter>
            <Speedometer workers={workers_QTY} />
          </Container>
        </Row>

        <Row>
          <Container title="WORKER_STATS" sixty>
            <Tables.Workers data={workers} />
          </Container>
          <Container title="SELECTED_WORKERS_HASHRATE" fourty>
            <Graphic.Workers />
          </Container>
        </Row>

        {this.renderPopUp()}
      </Flex>
    )
  }
}

Home = connect({
  theme: 'user.theme',
  balance: 'user.balance',
  coin: 'user.coin',
  payments: 'home.payments',
  workers: 'home.workers',
  workers_QTY: 'home.workers_QTY',
  hashrate: 'subaccounts.hashrate',
  sub_stats: 'subaccounts.sub_stats',
  payments_all: 'subaccounts.payments_all',
})(Home)

export { Home }
