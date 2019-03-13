import React, { Component } from 'react'
import cx from 'classnames'

import { Container, Row, Flex } from 'components/layouts'
import { Button } from 'components/UI'
import { Balance } from 'components/common'

import {
  Graphic,
  Earned,
} from './components'

import styles from './styles.module.scss'


export class PartnerDashboard extends Component {
  render() {
    return (
      <Flex column fullWidth>

        <Row>
          <Flex column third>
            <Container title="YOUR_BALANCE" mini>
              <Balance />
            </Container>
            <Container title="TOTAL_INCOME" mini>
              <Earned />
            </Container>
          </Flex>
          <Container title="YOUR_INCOME" third>
            <Graphic />
          </Container>
        </Row>

        <Row>
          <Container title="YOUR_LEVEL" full>
          </Container>
        </Row>

        <Row>
          <Container title="YOUR_TEAM" third>
          </Container>
          <Container title="TEAM_GROWTH" third2>
          </Container>
        </Row>

      </Flex>
    )
  }
}
