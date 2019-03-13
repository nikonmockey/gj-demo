import React from 'react'
import cx from 'classnames'

import styles from './styles.module.scss'


export const Button = ({ label, children, className, ...props }) =>
  <button
    className={cx( styles.button, className )}
    {...props}>
    { label || children }
  </button>
