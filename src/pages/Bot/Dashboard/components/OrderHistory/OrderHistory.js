import React from 'react'
import cx from 'classnames'

// import { Line } from 'components/UI'
import { Table, Flex } from 'components/layouts'
import { Span } from 'components/typo'
import { head, data } from './Data.js'

import styles from './styles.module.scss'

export const OrderHistory = ({ label, children, className }) =>
  <Flex column>
    <Flex className={styles.sections}>
      <Span dark>TYPE</Span>
      <Span dark>RATE_DOLAR</Span>
      <Span dark>COUNT_CRYPTO</Span>
      <Span dark>COUNT_MONEY</Span>
    </Flex>
    <Table withoutHead head={head} data={data} />
  </Flex>
