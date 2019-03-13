import React from 'react'
import cx from 'classnames'

// import { Line } from 'components/UI'
import { Table, Flex } from 'components/layouts'
import { Span } from 'components/typo'
import { head, data } from './SubAccData'

import styles from './styles.module.scss'

export const Subaccounts = ({ label, children, className }) =>
  <Flex column>
    <Flex className={styles.sections}>
      <Span dark style={{flexBasis: '10%'}}>SUBACCOUNTS</Span>
      <Span dark style={{flexBasis: '27%'}}>HASHRATE</Span>
      <Span dark style={{flexBasis: '27%'}}>WORKERS</Span>
      <Span dark style={{flexBasis: '36%'}}>EARNING</Span>
    </Flex>
    <Table head={head} data={data} />
  </Flex>
