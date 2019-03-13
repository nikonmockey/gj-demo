import React, { Component } from 'react'
import { connect } from 'redaction'
import { user } from 'redux/actions'
import cx from 'classnames'

import { Flex } from 'components/layouts'
import { Title } from 'components/typo'
import { Icon } from './Icon'

import styles from './styles.module.scss'

const currencies = [
 'bitcoin',
 'litecoin',
 'dah',
 'bitcoinCash',
 'zCash',
 'hCash',
]


class Currency extends Component {
  changeCoin = coin => user.setCoin(coin)

  render() {
    const { coins, currency, theme } = this.props

    return (
      <Flex className={styles.container} alignCenter>
        <Title className={styles.title}>CURRENCY</Title>
        {
          Boolean(coins) && coins.map( (coin) => (
            <Icon
              code={coin.code}
              isNight={theme === 'night'}
              active={coin.id === currency.id}
              key={coin.id}
              onClick={() => this.changeCoin(coin)} />
          ))
        }
      </Flex>
    )
  }
}

Currency = connect({
  currency: 'user.coin',
  coins: 'user.coins',
  theme: 'user.theme',
})(Currency)

export { Currency }
