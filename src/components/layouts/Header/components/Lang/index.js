import React, { Component } from 'react'
import cx from 'classnames'
import { connect } from 'redaction'
import { user } from 'redux/actions'

import { Flex } from 'components/layouts'
import { Text, Icon, Popover } from 'components/UI'
import { Span, Subhead } from 'components/typo'

import * as icons from './images'
import { ReactComponent as Marker } from 'assets/marker.svg'

import styles from './styles.module.scss'


class Picker extends Component {
  state = {
    popIsOpen: false
  }

  setLocale = locale =>
    user.setLocale(locale.toLowerCase())

  togglePopover = () => this.setState({ popIsOpen: !this.state.popIsOpen })

  render() {
    const { locale } = this.props
    const { popIsOpen } = this.state
    const lo = locale.slice(0,1).toUpperCase() + locale.slice(1, 2)

    return(
      <Flex
        className={styles.container}
        onClick={this.togglePopover}
        alignCenter
        relative
      >
        <Icon src={icons[lo]} className={styles.icon} />
        <Span withoutLocale>{lo}</Span>
        <Marker className={styles.marker} />

        <Popover
          className={styles.popover}
          opened={popIsOpen}
          onClose={this.togglePopover}>
            <Flex column>
              <Subhead>LANGUAGES</Subhead>
              {
                ['Ru', 'En', 'Id'].map( (locale, ix) => (
                  <Flex
                    className={styles.lang}
                    onClick={() => this.setLocale(locale)}>
                      <Icon
                        src={icons[locale]}
                        className={styles.icon} />
                      <Span>{`languages.${locale}`}</Span>
                  </Flex>
                ))
              }
            </Flex>
        </Popover>
      </Flex>
    )
  }
}

export const Lang = connect({
  locale: 'user.locale'
})(Picker)
