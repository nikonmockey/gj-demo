import React from 'react'
import { connect } from 'redaction'
import cx from 'classnames'

import { Flex } from 'components/layouts'
import styles from './styles.module.scss'


export const HR =
  connect({ theme: 'user.theme' })(
    ({ theme }) =>
      <Flex className={cx( styles.container, styles[theme] )} />
  )
