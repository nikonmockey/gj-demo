import React from 'react'
import cx from 'classnames'

import { Table, Flex } from 'components/layouts'
import { Span } from 'components/typo'
import { head, data } from './WithdrawalsDate.js'

import styles from './styles.module.scss'


export const Withdrawals = ({ label, children, className }) =>
  <Flex column>
    <Flex className={styles.sections}>
      <Span dark style={{flexBasis: '16.6%'}}>DATE</Span>
      <Span dark style={{flexBasis: '16.6%'}}>AMOUNT</Span>
      <Span dark style={{flexBasis: '16.6%'}}>STATUS</Span>
      <Span dark style={{flexBasis: '25%'}}>WALLET</Span>
      <Span dark style={{flexBasis: '25%'}}>HASH_TRANSACTION</Span>
    </Flex>
    <Table withoutHead head={head} data={data} />
  </Flex>
