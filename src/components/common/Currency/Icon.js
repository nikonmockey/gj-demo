import React from 'react'
import cx from 'classnames'

import { Flex } from 'components/layouts'

import * as icons from './images'

import styles from './styles.module.scss'


export const Icon = ({ code, active, onClick, isNight }) => {
  const Icon = icons[code]

  return (
    <Flex
      className={cx( isNight ? styles.buttonNight : styles.button, active && styles.active)}
      onClick={onClick}
      center>
      <Icon className={styles.icon} />
    </Flex>
  )
}
