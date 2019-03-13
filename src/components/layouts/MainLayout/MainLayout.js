import React from 'react'
import { connect } from 'redaction'
import cx from 'classnames'
import { isMobile } from 'helpers'

import { Flex } from 'components/layouts'

import styles from './styles.module.scss'


export const MainLayout =
  connect({ theme: 'user.theme' })(
    ({ children, theme }) => (
      <Flex className={cx( styles.container, styles[theme]  )} relative>
        {
          !isMobile && <Flex className={styles.spacing} />
        }
        <Flex className={styles.wrapper} f1 column>
          {children}
        </Flex>
      </Flex>
    )
  )

