import React from 'react'
import { connect } from 'redaction'
import cx from 'classnames'

import { Text } from 'components/UI'

import styles from './styles.module.scss'


export const Subhead =
  connect({ theme: 'user.theme' })(
    ({ id, children, theme }) => (
      <h3 className={cx( styles.heading, styles[theme]  )}>
        <Text id={id || children} />
      </h3>
    )
  )

