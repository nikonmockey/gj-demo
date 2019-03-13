import React from 'react'

import { Line } from 'components/UI'
import { Flex } from 'components/layouts'
import { Span } from 'components/typo'

import styles from './styles.module.scss'


export const Income = ({ payments: { total, daily } }) =>
  <>
    <Line>
      <Flex justifyBetween alignCenter f1>
        <Span dark>ALL_TIME</Span>
        <Span dark withoutLocale>{total}</Span>
      </Flex>
    </Line>
    <Line>
      <Flex justifyBetween alignCenter f1>
        <Span dark>YESTERDAY</Span>
        <Span dark withoutLocale>{daily}</Span>
      </Flex>
    </Line>
  </>
