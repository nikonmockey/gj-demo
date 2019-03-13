import React, { Component } from 'react'
import cx from 'classnames'

import { Container, Row, Flex } from 'components/layouts'
import { Button, Line } from 'components/UI'
import { Span, Subhead } from 'components/typo'
import { PlugPage, PageNotFound } from 'components/common'
import { ASIC, GPU } from './components'
import asicIcon from 'assets/asic.svg'
import gpuIcon from 'assets/gpu.svg'

import styles from './styles.module.scss'


export class ConnectingInstruction extends Component {
  constructor () {
    super()
    this.state = {active: 1}
    this.handleClickOne = this.handleClickOne.bind(this)
    this.handleClickTwo = this.handleClickTwo.bind(this)
  }

  handleClickOne () {
    this.setState({active: 1})
  }

  handleClickTwo () {
    this.setState({active: 2})
  }

  renderContent () {
    switch (this.state.active) {
      case 1:
        return <ASIC />
        break;
      case 2:
        return <GPU />
        break;
    }
  }

  render() {
    const { active } = this.state
    return (
      <Flex column fullWidth>
      <Flex wrap className={styles.wrapper}>
          <Button className={cx(styles.switchBtn, active === 1 && styles.switchBtnActive)}
            onClick={this.handleClickOne}>
            <img className={styles.btnIcon} src={asicIcon} />
            ASIC
            </Button>
          <Button className={cx(styles.switchBtn, active === 2 && styles.switchBtnActive)}
            onClick={this.handleClickTwo}>
            <img className={styles.btnIcon} src={gpuIcon} />
            GPU
            </Button>
        </Flex>
        <Flex fullWidth className={styles.wrapper}>
          {this.renderContent()}
        </Flex>

      </Flex>
    )
  }
}
