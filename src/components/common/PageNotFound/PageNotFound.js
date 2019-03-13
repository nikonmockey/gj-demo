import React from 'react'
import cx from 'classnames'

import { Flex } from 'components/layouts'
import { Title, Span } from 'components/typo'
import notFoundIcon from 'assets/notFound.svg'

import styles from './styles.module.scss'


export const PageNotFound = () => {
  return (
    <Flex column center third className={styles.container}>
      <img src={notFoundIcon} className={styles.icon} />
      <Title className={styles.title}>Error 404 страница не найдена</Title>
      <br />
      <Span className={styles.span}>К сожалению страница по заданому домену не найдена.</Span>
    </Flex>
  )
}
