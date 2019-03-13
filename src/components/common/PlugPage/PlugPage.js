import React from 'react'
import cx from 'classnames'

import { Flex } from 'components/layouts'
import { Title, Span } from 'components/typo'
import maintenanceIcon from 'assets/maintenance.svg'

import styles from './styles.module.scss'


export const PlugPage = () => {
  return (
    <Flex column center third className={styles.container}>
      <img src={maintenanceIcon} height="180px" width="180px" />
      <Title className={styles.title}>Данный раздел находиться в разработке</Title>
      <br />
      <Span className={styles.span}>Мы обязательно оповестим вас, когда он будет доступен.</Span>
    </Flex>
  )
}
