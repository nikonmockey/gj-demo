import React, { Component } from 'react'
import { connect } from 'redaction'

import { Flex } from 'components/layouts'
import { Avatar, Popover, Icon, NavLink } from 'components/UI'
import { Span } from 'components/typo'

import { ReactComponent as Marker } from 'assets/marker.svg'

import styles from './styles.module.scss'


class Account extends Component {
  state = {
    popIsOpen: false
  }

  togglePopover = () => this.setState({ popIsOpen: !this.state.popIsOpen })

  render() {
    const { popIsOpen } = this.state
    const { profile } = this.props

    return (
      <Flex
        className={styles.container}
        onClick={this.togglePopover}
        alignCenter
        relative
      >
        <NavLink to="/personal-data">
          <Avatar mini />
        </NavLink>
        <Span withoutLocale>{profile.email || "m@testmail.com"}</Span>
        <Marker className={styles.marker} />

        <Popover
          className={styles.popover}
          opened={popIsOpen}
          onClose={this.togglePopover}>
            <Flex column>
              <Flex>
                <Icon />
                <Span>INPUT_LOGS</Span>
              </Flex>
              <Flex>
                <Icon />
                <Span>EXIT</Span>
              </Flex>
            </Flex>
        </Popover>
      </Flex>
    )
  }
}

export default connect({
  profile: 'user.profile',
})(Account)
