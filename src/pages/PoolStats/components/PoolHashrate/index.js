import React from 'react'
import cx from 'classnames'

import { Flex } from 'components/layouts'
import { Digit, Span } from 'components/typo'
import tachometerIcon from 'assets/tachometer.png'

import styles from './styles.module.scss'


export const PoolHashrate = ({ coin, balance, children, className, isNight }) =>
    <Flex justifyBetween>
      <Digit bold className={styles.digits}>
        {
          new Intl
            .NumberFormat('ru', { minimumFractionDigits: 1})
            .format(77.2)
        }
        <sup>TH/s</sup>
      </Digit>
      <img className={cx(styles.icon, isNight && styles.night)} src={tachometerIcon} />
    </Flex>
