import React, { Component } from 'react'
import cx from 'classnames'
import { connect } from 'redaction'

import { user, subaccounts } from 'redux/actions'

import { Container, Flex } from 'components/layouts'
import { Button, Modal } from 'components/UI'
import { Currency } from 'components/common'

import { SubTable, SubForm } from './components'

import styles from './styles.module.scss'


class SubAccounts extends Component {
  state = {
    isModalOpened: false,
  }

  toggleModal = () => this.setState({ recaptcha: !this.state.recaptcha })

  componentDidMount() {
    user.getCoins()
    subaccounts.getSubaccounts({ coin: "BTC", page: 0, pageSize: 10, extended: true })
  }

  render() {
    const { isModalOpened } = this.state
    const { list } = this.props

    return (
      <Flex column fullWidth>

        <Flex justifyBetween alignCenter fullWidth className={styles.wrapper}>
          <Currency />
          <Button onClick={this.recap}>+ ДОБАВИТЬ СУБАКАУНТ</Button>
        </Flex>

        <Container only>
          <SubTable list={list} />
        </Container>

        <Modal active={isModalOpened} onClose={this.toggleModal}>
          <SubForm />
        </Modal>

      </Flex>
    )
  }
}

SubAccounts = connect({
  list: 'subaccounts.subaccounts',
})(SubAccounts)

export { SubAccounts }
