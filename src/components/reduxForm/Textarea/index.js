import React from 'react'

import styles from './style.module.scss'


export const Flat = ({ ...props }) =>
  <textarea
    styleName={styles.input}
    {...props} />


export const Redux = ({ input, ...props }) =>
  <Flat
    {...input}
    {...props}
  />
