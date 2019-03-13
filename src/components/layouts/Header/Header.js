import React, { Component } from 'react'
import { connect } from 'redaction'

import { isMobile } from 'helpers'
import { user } from 'redux/actions'

import { Flex } from 'components/layouts'
import { Title } from 'components/typo'

import {
  Burger,
  Account,
  Lang,
  Notif,
  Sets,
  Theme,
  Wallet,
} from './components'

import styles from './styles.module.scss'


class Header extends Component {
  componentDidMount() {
    user.getProfile()
  }

  render() {
    const path = this.props.path.substr(1)

    return (
      <>
        <Flex className={styles.container} justifyBetween alignCenter>
          <Title className={styles.title}>{`PAGES.${path || 'MINING_DASHBOARD'}`}</Title>
          <Flex className={styles.iconswrapper} alignCenter>
            {
              isMobile &&
                <Burger
                  className={styles.burger}
                  onClick={
                    () => document
                            .getElementById("nav")
                            .classList
                            .toggle("opened-nav")
                  }
                />
            }
            <Theme />
            <Lang />
            <Wallet />
            <Notif />
            <Sets />
            <Account />
          </Flex>
        </Flex>
        <div className={styles.dash} />
      </>
    )
  }
}


Header = connect({
  path: 'router.location.pathname',
})(Header)

export { Header }
