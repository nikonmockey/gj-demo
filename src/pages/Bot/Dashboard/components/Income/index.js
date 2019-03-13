import React from 'react'
import cx from 'classnames'

import { Flex } from 'components/layouts'
import { Digit, Span } from 'components/typo'
import { Line } from 'components/UI'
import calendarIcon from 'assets/calendar.svg'

import styles from './styles.module.scss'


export const Income = ({ coin, profit, children, className, dir = true, isNight }) =>
    <Flex column justifyBetween>
      <Flex>
        <Digit bold className={styles.digits}>
          {
            new Intl
              .NumberFormat('ru', { minimumFractionDigits: 2 })
              .format(profit)
          }
          <sup>$</sup>
        </Digit>
        <Flex
          center
          className={cx(
            styles.circle,
            isNight ? dir ? styles.nightGreen : styles.nightRed :
            dir ? styles.green : styles.red
          )}>
            15%
        </Flex>
      </Flex>
      <Line>
        <Flex alignLeft f1>
          <img src={calendarIcon} className={styles.icon} />
          <Span dark className={styles.span}>11.12.2018 - 13.02.2019</Span>
        </Flex>
      </Line>
    </Flex>
