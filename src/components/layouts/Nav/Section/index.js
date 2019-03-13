import React, { Component } from 'react'
import cx from 'classnames'

import { Flex } from 'components/layouts'
import { Icon, Text, NavLink } from 'components/UI'

import * as icons from '../images'
import { ReactComponent as Marker } from 'assets/marker.svg'
import { ReactComponent as Lock} from 'assets/locked.svg'

import styles from './styles.module.scss'


export class Section extends Component {
  state = {
    opened: false
  }

  openSub = () => this.setState({ opened: !this.state.opened })

  renderMarker () {
    if (this.props.subsections.length === 0) return <Lock className={styles.marker} />
    return <Marker className={styles.marker} />
  }

  // renderMarker = () =>
  //   !Boolean(this.props.subsections.length)
  //     ? <Lock className={styles.marker} />
  //     : <Marker className={styles.marker} />

  render() {
    const { name, subsections } = this.props
    const { opened } = this.state

    return (
      <Flex
        className={cx( styles.container, opened && styles.opened )}
        column>
        <Flex
          className={styles.main}
          onClick={this.openSub}
          alignCenter>
            <Icon src={icons[name]} className={styles.icon} />
            <Text id={`nav.${name}.name`} />
            {this.renderMarker()}
        </Flex>
        <Flex
          className={styles.sub}
          column>
          {
            subsections.map( (el, ix) => (
              <NavLink to={`/${el}`}>
                <Flex className={styles.subsection} alignCenter>
                  <Text id={`nav.${name}.subsections.${el}`} />
                </Flex>
              </NavLink>
            ))
          }
        </Flex>
      </Flex>
    )
  }
}
