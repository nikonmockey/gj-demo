import React from 'react'
import cx from 'classnames'

import { Flex } from 'components/layouts'
import { Digit, Span } from 'components/typo'
import { Line } from 'components/UI'

import styles from './styles.module.scss'


export const Status = ({ coin, balance, children, className, isNight }) =>
    <Flex column justifyBetween>
      <Span dark className={styles.span}>Не хватает средств на балансе (минимально 1000$)</Span>
        <Flex center f1 className={cx(styles.line, isNight && styles.nightLine)}>
          <div className={styles.status}/>
          <Span className={styles.lineSpan}>Приостановлено</Span>
        </Flex>
    </Flex>
