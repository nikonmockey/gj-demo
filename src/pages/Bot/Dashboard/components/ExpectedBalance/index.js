import React from 'react'
import cx from 'classnames'

import { Flex } from 'components/layouts'
import { Digit, Span } from 'components/typo'
import { Line } from 'components/UI'
import checkCircle from 'assets/checkCircle.svg'

import styles from './styles.module.scss'


export const ExpectedBalance = ({ coin, forecast, children, className }) =>
    <Flex column justifyBetween>
      <Digit bold className={styles.digits}>
        {
          new Intl
            .NumberFormat('ru', { minimumFractionDigits: 2 })
            .format(forecast)
        }
        <sup>$</sup>
      </Digit>
      <Line>
        <Flex alignLeft f1>
          <img src={checkCircle} className={styles.icon}/>
          <Span dark className={styles.span}>После исполнения всех текущих ордеров</Span>
        </Flex>
      </Line>
    </Flex>
