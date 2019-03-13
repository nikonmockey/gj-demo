import React from 'react'
import cx from 'classnames'
import { connect } from 'redaction'

import styles from './styles.module.scss'


export const Digit =
connect({ theme: 'user.theme' })(
({ children, bold, className, theme }) =>
  (
    <span className={cx(
      styles.digit,
      styles[theme],
      bold && styles.bold,
      className,
    )}>
    {children}
    </span>
  )
)
