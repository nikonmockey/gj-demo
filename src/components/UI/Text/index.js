import React from 'react'
// import cx from 'classnames'

import { FormattedMessage } from 'react-intl'

// import styles from './styles.module.scss'


export const Text = ({ id, ...props }) =>
  <FormattedMessage id={id} {...props} />
