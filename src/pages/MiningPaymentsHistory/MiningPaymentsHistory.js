import React, { Component } from 'react'
import cx from 'classnames'

import { Container, Row, Flex } from 'components/layouts'
import { Button } from 'components/UI'

import {
  PaymentHistory,
} from './components'

import styles from './styles.module.scss'


export class MiningPaymentsHistory extends Component {
  render() {
    return (
      <Flex column fullWidth>
      <Button>ЭКСПОРТ В XLS</Button>
      
        <Row>
          <Container title="История выплат" third>
            <PaymentHistory />
          </Container>
        </Row>

      </Flex>
    )
  }
}
