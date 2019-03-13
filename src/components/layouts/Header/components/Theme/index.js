import React, { Component } from 'react'
import cx from 'classnames'
import { connect } from 'redaction'
import { user } from 'redux/actions'

import { Flex } from 'components/layouts'
import { Text, Icon } from 'components/UI'

import sun from './images/sun.svg'
import moon from './images/moon.svg'

import styles from './styles.module.scss'


class Switcher extends Component {
  toggleTheme = () => user.setTheme(this.props.theme === 'day' ? 'night' : 'day')

  render() {
    const { theme } = this.props

    return (
      <Flex
        className={cx( styles.container, styles[theme] )}
        onClick={this.toggleTheme}
        alignCenter
        justifyBetween
        relative>
        <Icon src={sun} className={styles.icon} />
        <Icon src={moon} className={styles.icon} />
        <div className={styles.switcher} />
      </Flex>
    )
  }
}

export const Theme = connect({
  theme: state => state.user.theme,
})(Switcher)

