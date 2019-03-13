import React from 'react'
import { connect } from 'redaction'
import cx from 'classnames'

import { Text } from 'components/UI'

import styles from './styles.module.scss'


export const Title =
  connect({ theme: 'user.theme' })(
    ({ id, children, className, theme }) => (
      <h1 className={cx( styles.heading, styles[theme], className )}>
        <Text id={id || children} />
      </h1>
    )
  )
