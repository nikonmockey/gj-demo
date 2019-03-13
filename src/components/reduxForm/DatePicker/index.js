import React from 'react'
import moment from 'moment'
import DP from 'react-datepicker'

import styles from './style.module.scss'


export const Flat = ({ ...props }) =>
  <DP
    minDate={moment()}
    className={styles.input}
    {...props} />


export const Redux = ({ input, ...props }) => (
  <Flat
    {...input}
    {...props}
  />
)
