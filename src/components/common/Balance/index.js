import React from 'react'
import { connect } from 'redaction'
import cx from 'classnames'

import { Flex } from 'components/layouts'
import { Digit, Span } from 'components/typo'

import styles from './styles.module.scss'


export const Balance =
  connect({
    balance: 'user.balance',
    coin: 'user.coin'
  })(
    ({ coin, balance, children, className }) =>
      <Flex column justifyBetween>
        <Digit bold className={styles.digits}>
          {
            new Intl
              .NumberFormat('ru', { minimumFractionDigits: 5 })
              .format(balance.total)
          }
          <sup>{coin.code}</sup>
        </Digit>
        <Flex column relative>
          <Flex className={cx( styles.btn, styles.gradient, styles.shadow )} />
          <Flex
            center
            className={cx( styles.btn, styles.gradient )}>
            <Span className={styles.label}>BUTTON_OUTPUT</Span>
            <Span className={styles.label}>REINVEST</Span>
          </Flex>
        </Flex>
      </Flex>
)
