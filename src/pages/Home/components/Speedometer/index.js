import React from 'react'
import cx from 'classnames'

import { Line } from 'components/UI'
import { Flex } from 'components/layouts'
import { Span } from 'components/typo'
import Icon from './icon'

import styles from './styles.module.scss'


export const Speedometer = ({ workers: { active, inactive, count } }) =>
  <>
    <Icon percent={ 100 / count * active} />
    <Flex className={styles.row} justifyBetween>
      <span className={styles.active}>{active}</span>
      <span className={styles.total}>{count}</span>
      <span className={styles.inactive}>{inactive}</span>
    </Flex>
  </>
