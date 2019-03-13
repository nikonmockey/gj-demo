import React, { Component } from 'react'
import { connect } from 'redaction'
import { Field, reduxForm } from 'redux-form'
import { validate } from 'redux/form'

import { Container, Flex } from 'components/layouts'
import { Icon, HR, Button } from 'components/UI'
import { Span } from 'components/typo'
import { Input } from 'components/reduxForm'

import { user } from 'redux/actions'
import icon from './icon.svg'
import qr from './qr.png'

import styles from './styles.module.scss'


class TwoFactor extends Component {
  componentDidMount() {
    user.getProfile()
  }

  render() {
    const { profile, handleSubmit } = this.props

    return (
      <Container only full>
        <Flex column>
          <Flex alignCenter>
            <Icon src={icon} />
            <Span dark withoutLocale>Google Authentificator</Span>
          </Flex>

          <Flex className={styles.text} column>
            <Span withoutLocale>1) Установите Google Authenticator (если у вас нет)</Span>
            <Flex className={styles.links} column>
              <Span withoutLocale>a) <a href="">Приложение iOS</a></Span>
              <Span withoutLocale>a) <a href="">Приложение iOS</a></Span>
              <Span withoutLocale>a) <a href="">Приложение iOS</a></Span>
            </Flex>
            <Span withoutLocale>2) Сканируйте штрих-код</Span>
            <Flex className={styles.qr}>
              <Icon src={qr} alt="" />
              <Flex center className={styles.code}>
                <Span withoutLocale>Также сохраните текстовый код</Span>
              </Flex>
            </Flex>
            <Span withoutLocale>3) Введите 6-значный код (который показывает на GA)</Span>
          </Flex>


          <form onSubmit={handleSubmit(user.putGACode)}>
            <Flex column>
              <Field
                name="code"
                placeholder="X X X X X X"
                component={Input.Redux} />
              <Button submit>Сохранить</Button>
            </Flex>
          </form>
        </Flex>
      </Container>
    )
  }
}


export default reduxForm({
  form: 'GACode',
  validate,
})(connect({
  initialValues: 'user.profile'
})(TwoFactor))
