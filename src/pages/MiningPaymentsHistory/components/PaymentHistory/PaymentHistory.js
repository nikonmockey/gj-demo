import React from 'react'
import cx from 'classnames'

import { Table, Flex } from 'components/layouts'
import { Span } from 'components/typo'
import { head, data } from './PaymentHistoryData'

import styles from './styles.module.scss'

export const PaymentHistory = ({ label, children, className }) =>
  <Flex column>
    <Flex className={styles.sections}>
      <Span dark style={{flexBasis: '12%'}}>DATE</Span>
      <Span dark style={{flexBasis: '12%'}}>SUBACCOUNTS</Span>
      <Span dark style={{flexBasis: '12%'}}>COUNT_COINS</Span>
      <Span dark style={{flexBasis: '12%'}}>NAME_COINS</Span>
      <Span dark style={{flexBasis: '12%'}}>METHOD_PAYMENTS</Span>
      <Span dark style={{flexBasis: '20%'}}>WALLET</Span>
      <Span dark style={{flexBasis: '20%'}}>HASH_TRANSACTION</Span>
    </Flex>
    <Table withoutHead head={head} data={data} />
  </Flex>
