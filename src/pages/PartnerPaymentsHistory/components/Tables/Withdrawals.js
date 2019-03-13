import React from 'react'
import cx from 'classnames'

import { Table, Flex } from 'components/layouts'
import { Span } from 'components/typo'
import { head, data } from './WithdrawalsDate.js'

import styles from './styles.module.scss'


export const Withdrawals = ({ label, children, className }) =>
  <Flex column>
    <Flex className={styles.sections}>
      <Span dark style={{flexBasis: '12%'}}>DATE</Span>
      <Span dark style={{flexBasis: '12%'}}>SUMM_HERTZ</Span>
      <Span dark style={{flexBasis: '12%'}}>PARTNERS_TABLE_WHERE</Span>
      <Span dark style={{flexBasis: '12%'}}>METHOD_PAYMENTS</Span>
      <Span dark style={{flexBasis: '12%'}}>SUMM_BTC</Span>
      <Span dark style={{flexBasis: '20%'}}>WALLET</Span>
      <Span dark style={{flexBasis: '20%'}}>HASH_TRANSACTION</Span>
    </Flex>
    <Table withoutHead head={head} data={data} />
  </Flex>
