import React from 'react'
import cx from 'classnames'

import { Flex } from 'components/layouts'

import styles from './styles.module.scss'


export const PageWrapper = ({ children }) => (
    <Flex relative>
      { children }
    </Flex>
)
