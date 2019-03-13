import React from 'react'
import cx from 'classnames'

import { Table, Flex } from 'components/layouts'
import { Span } from 'components/typo'
import { head } from './data'

import styles from './styles.module.scss'

export const SubTable = ({ list, label, children, className }) =>
  <Flex column>
    <Flex className={styles.sections}>
      <Span dark style={{flexBasis: '20%'}}>SUBACCOUNTS</Span>
      <Span dark style={{flexBasis: '25%'}}>WALLET_ADDRESS</Span>
      <Span dark style={{flexBasis: '25%'}}>COMMENT</Span>
      <Span dark style={{flexBasis: '10%'}}>BTC_BALANCE</Span>
      <Span dark style={{flexBasis: '10%'}}>METHOD_PAYMENTS</Span>
      <Span dark style={{flexBasis: '10%'}}>INVEST</Span>
    </Flex>
    <Table withoutHead head={head} data={list} />
  </Flex>
