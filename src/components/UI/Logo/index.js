import React from 'react'

import styles from './styles.module.scss'

import logo from 'assets/logogj_mini.png'


export const Logo = ({ className }) =>
  <img
    className={className}
    src={logo}
    alt="GoldJob"
  />
