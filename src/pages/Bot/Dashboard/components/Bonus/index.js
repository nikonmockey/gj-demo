import React from 'react'
import cx from 'classnames'

import { Flex } from 'components/layouts'
import { Digit, Span } from 'components/typo'
import { Line } from 'components/UI'

import styles from './styles.module.scss'


export const Bonus = ({ coin, balance, children, className, isNight }) =>
    <Flex column justifyBetween>
      <Span dark className={styles.title}>Месяцы 2/3</Span>
      <Span dark className={styles.span}>Прогрес увеличится 17.11.2018</Span>
        <Flex alignCenter justifyBetween>
          <div className={styles.bonusLine} />
          <div className={styles.bonusLine} />
          <div className={cx(styles.bonusLineInactive, isNight && styles.nightLine)} />
        </Flex>
    </Flex>
