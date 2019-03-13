import React from 'react'
import cx from 'classnames'

// import { Line } from 'components/UI'
import { Table, Flex } from 'components/layouts'
import { Span } from 'components/typo'
import { head, data } from './BlockTableData'

import styles from './styles.module.scss'

export const BlockTable = ({ label, children, className }) =>
  <Flex column>
    <Flex className={styles.sections}>
      <Span dark style={{flexBasis: '13%'}}>BLOCK_HEIGHT</Span>
      <Span dark style={{flexBasis: '13%'}}>TIME</Span>
      <Span dark style={{flexBasis: '30%'}}>BLOCK_HASH</Span>
      <Span dark style={{flexBasis: '22%'}}>REWARD</Span>
      <Span dark style={{flexBasis: '22%'}}>LUCK</Span>
    </Flex>
    <Table withoutHead head={head} data={data} />
  </Flex>
