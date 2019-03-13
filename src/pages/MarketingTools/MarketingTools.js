import React, { Component } from 'react'
import cx from 'classnames'
import { connect } from 'redaction'

import { Container, Row, Flex } from 'components/layouts'
import { Button, Line } from 'components/UI'
import { Span, Subhead } from 'components/typo'
import { PlugPage, PageNotFound } from 'components/common'
import { Links } from './components'
import linkIcon from 'assets/link.svg'
import pictureIcon from 'assets/picture.svg'
import postsIcon from 'assets/posts.svg'

import styles from './styles.module.scss'


class MarketingTools extends Component {
  constructor () {
    super()
    this.state = {active: 1}
    this.handleClickOne = this.handleClickOne.bind(this)
    this.handleClickTwo = this.handleClickTwo.bind(this)
    this.handleClickThree = this.handleClickThree.bind(this)
  }

  handleClickOne () {
    this.setState({active: 1})
  }

  handleClickTwo () {
    this.setState({active: 2})
  }

  handleClickThree () {
    this.setState({active: 3})
  }

  renderContent () {
    switch (this.state.active) {
      case 1:
        return <Links isNight={this.props.theme === 'night'} />
        break;
      case 2:
        return <PlugPage />
        break;
      case 3:
        return <PageNotFound />
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
            <img className={styles.btnIcon} src={linkIcon} />
            ССЫЛКИ
            </Button>
          <Button className={cx(styles.switchBtn, active === 2 && styles.switchBtnActive)}
            onClick={this.handleClickTwo}>
            <img className={styles.btnIcon} src={pictureIcon} />
            КАРТИНКИ
            </Button>
          <Button className={cx(styles.switchBtn, active === 3 && styles.switchBtnActive)}
            onClick={this.handleClickThree}>
            <img className={styles.btnIcon} src={postsIcon} />
            ПОСТЫ
            </Button>
        </Flex>
        <Flex fullWidth className={styles.wrapper}>
          {this.renderContent()}
        </Flex>

      </Flex>
    )
  }
}

MarketingTools = connect({
  theme: 'user.theme',
})(MarketingTools)

export { MarketingTools }
