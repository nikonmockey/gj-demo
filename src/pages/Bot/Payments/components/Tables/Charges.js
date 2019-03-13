import React from 'react'
import cx from 'classnames'

import { Table, Flex } from 'components/layouts'
import { Span } from 'components/typo'
import { head, data } from './ChargesData.js'

import styles from './styles.module.scss'

export const Charges = ({ label, children, className }) =>
  <Flex column>
    <Flex className={styles.sections}>
      <Span dark>DATE</Span>
      <Span dark>PROFIT_USD</Span>
      <Span dark>PROFIT_PERSENT</Span>
      <Span dark>DESCRIPTION</Span>
    </Flex>
    <Table withoutHead head={head} data={data} />
  </Flex>
