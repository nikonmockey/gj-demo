import React from 'react'
import cx from 'classnames'

import styles from './style.module.scss'


export const Flat = ({ half, ...props }) =>
    <input className={cx( styles.input, half && styles.half )} {...props} />


export const Redux = ({ input, ...props }) =>
  <Flat
    {...input}
    {...props}
  />
