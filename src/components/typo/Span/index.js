import React from 'react'
import cx from 'classnames'
import { connect } from 'redaction'

import { Text } from 'components/UI'

import styles from './styles.module.scss'


export const Span =
connect({ theme: 'user.theme' })(
   ({
    id,
    dark,
    children,
    theme,
    withoutLocale,
    className,
    style,
  }) => (
    <span
      style={style}
      className={cx(
        styles.span,
        styles[theme],
        dark && styles.dark,
        className
      )}>
        {
          !withoutLocale
            ? <Text id={Boolean(id) ? id : children} />
            : <>{children}</>
        }
    </span>
  )
)
