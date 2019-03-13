import React from 'react'
import cx from 'classnames'

import { Flex } from 'components/layouts'
import { Digit, Span } from 'components/typo'
import cubesIcon from 'assets/cubes.png'

import styles from './styles.module.scss'


export const ClosedBlocks = ({ coin, balance, children, className }) =>
    <Flex justifyBetween>
      <Digit bold className={styles.digits}>
        {
          new Intl
            .NumberFormat('ru', { minimumFractionDigits: 0})
            .format(114)
        }
      </Digit>
      <img className={styles.icon} src={cubesIcon} />
    </Flex>
