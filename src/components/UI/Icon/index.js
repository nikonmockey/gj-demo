import React from 'react'
// import cx from 'classnames'

import { FormattedMessage } from 'react-intl'

// import styles from './styles.module.scss'


export const Icon = ({ src, alt, ...props }) =>
  <img src={src} alt={alt || ""} {...props} />
