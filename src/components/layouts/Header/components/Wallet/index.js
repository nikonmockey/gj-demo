import React, { Component } from 'react'
import cx from 'classnames'

import { Flex } from 'components/layouts'
import { Text, Icon, Popover } from 'components/UI'
import { Span, Subhead } from 'components/typo'

import icon from './icon.svg'

import styles from './styles.module.scss'

const data = [
  {
    name: 'USD',
    amount: '1234',
  },
  {
    name: 'BTC',
    amount: '0.3',
  },
  {
    name: 'BTH',
    amount: '12',
  },
  {
    name: 'HZ',
    amount: '43',
  },
  {
    name: 'LT',
    amount: '52',
  },
  {
    name: 'zCASH',
    amount: '8',
  },
]

export class Wallet extends Component {
  state = {
    popIsOpen: false
  }

  togglePopover = () => this.setState({ popIsOpen: !this.state.popIsOpen })

  render() {
    const { popIsOpen } = this.state

    return(
      <Flex
        className={styles.container}
        onClick={this.togglePopover}
        alignCenter
        relative
      >
        <Icon src={icon} className={styles.icon} />

        <Popover
          className={styles.popover}
          opened={popIsOpen}
          onClose={this.togglePopover}>
            <Flex column fullWidth>
              <Subhead>ALL_BALANCE</Subhead>
              data.map(item => {
                
              })
            </Flex>
        </Popover>
      </Flex>
    )
  }
}
