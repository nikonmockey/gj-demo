import React from 'react'
import { connect } from 'redaction'
import cx from 'classnames'

import { Flex } from 'components/layouts'

import styles from './styles.module.scss'


export const Popover =
  connect({ theme: 'user.theme' })(
    ({ opened, children, className, theme, onClose, ...props }) => opened && (
      <>
        <div className={styles.backdrop} onClick={onClose} />
        <Flex
          className={cx( styles.container, styles[theme], className )}
          {...props}>
            {children}
        </Flex>
      </>
    )
  )
