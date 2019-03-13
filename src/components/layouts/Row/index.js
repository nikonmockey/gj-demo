import React from 'react'

import { Flex } from 'components/layouts'
import styles from './styles.module.scss'


export const Row = ({ children }) =>
  (
    <Flex className={styles.row} w100>
      {children}
    </Flex>
  )
