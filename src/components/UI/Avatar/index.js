import React from 'react'
import cx from 'classnames'

import { Flex } from 'components/layouts'

import placeholder from './user.svg'
import styles from './styles.module.scss'


export const Avatar = ({ src, alt, className, mini, ...props }) =>
  <Flex className={cx( styles.container, mini && styles.mini, className )} center>
    <img className={ Boolean(src) ? styles.avatar : styles.placeholder } src={src || placeholder } alt={alt || ""} {...props} />
  </Flex>
