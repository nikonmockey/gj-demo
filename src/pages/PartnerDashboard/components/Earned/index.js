import React from 'react'
import cx from 'classnames'

import { Flex } from 'components/layouts'
import { Digit, Span } from 'components/typo'

import styles from './styles.module.scss'
import moneyBagIcon from 'assets/money-bag.png'


export const Earned = ({ coin, balance, children, className }) =>
    <Flex justifyBetween>
      <Digit bold className={styles.digits}>
        {
          new Intl
            .NumberFormat('ru', { minimumFractionDigits: 0})
            .format(1324)
        }
        <sup>HZ</sup>
      </Digit>
      <img className={styles.icon} src={moneyBagIcon} />
    </Flex>
