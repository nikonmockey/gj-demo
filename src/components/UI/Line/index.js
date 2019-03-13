import React from 'react'
import { connect } from 'redaction'
import cx from 'classnames'

import { Flex } from 'components/layouts'
import styles from './styles.module.scss'


export const Line =
  connect({ theme: 'user.theme' })(
    ({ children, theme }) =>
      <Flex className={cx( styles.container, styles[theme] )}>
        {children}
      </Flex>
  )
