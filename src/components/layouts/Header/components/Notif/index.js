import React, { Component } from 'react'
import cx from 'classnames'

import { Flex } from 'components/layouts'
import { Text, Icon, Popover } from 'components/UI'
import { Span, Subhead } from 'components/typo'

import icon from './icon.svg'

import styles from './styles.module.scss'


export class Notif extends Component {
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
            <Flex column>
              <Subhead>NOTIFICATION</Subhead>
            </Flex>
        </Popover>
      </Flex>
    )
  }
}
