import React, { Component } from 'react'
import cx from 'classnames'
import { connect } from 'redaction'

import { Container, Row, Flex } from 'components/layouts'
import { Button } from 'components/UI'
import { Currency } from 'components/common'

import {
  BlockTable,
  Graphic,
  PoolHashrate,
  ActiveWorkers,
  ClosedBlocks,
  YieldCalculator,
} from './components'

import styles from './styles.module.scss'


class PoolStats extends Component {
  render() {
    const isNight = this.props.theme === 'night'
    return (
      <Flex column fullWidth>
      <Currency />

        <Row>
          <Container title="POOL_HASHRATE" third>
            <PoolHashrate isNight={isNight} />
          </Container>
          <Container title="POOL_ACTIVE_WORKERS" third>
            <ActiveWorkers isNight={isNight} />
          </Container>
          <Container title="DONE_BLOCKS" third>
            <ClosedBlocks isNight={isNight} />
          </Container>
        </Row>

        <Row>
          <Container title="Hashrate" third2>
            <Graphic />
          </Container>
          <Container title="CALCULATOR" third>
            <YieldCalculator />
          </Container>
        </Row>

        <Row>
          <Container title="BLOCK_TABLE" third>
            <BlockTable />
          </Container>
        </Row>

      </Flex>
    )
  }
}

PoolStats = connect({
  theme: 'user.theme',
})(PoolStats)

export { PoolStats }
