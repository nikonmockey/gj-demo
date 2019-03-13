import React, { Component } from 'react'
import { connect } from 'redaction'
import { Field, reduxForm } from 'redux-form'
import { validate } from 'redux/form'

import { Container, Flex } from 'components/layouts'
import { Avatar, HR, Button } from 'components/UI'
import { Span } from 'components/typo'
import { Input } from 'components/reduxForm'

import { user } from 'redux/actions'

import styles from './styles.module.scss'


class Profile extends Component {
  componentDidMount() {
    user.getProfile()
  }

  render() {
    const { profile, handleSubmit } = this.props

    return (
      <Container only full>
        <Flex column>
          <Flex alignCenter>
            <Avatar mini />
            <Flex column>
              <Span>{ (profile.bot_params && profile.bot_params.first_name) || "Иван Иванов" }</Span>
              <Span className={styles.load}>Загрузить фото</Span>
            </Flex>
          </Flex>

          <HR />

          <form onSubmit={handleSubmit(user.putProfile)}>
            <Flex column>
              <Line
                label="Ваши имя и фамилия"
                required>
                <Field
                  name="name"
                  placeholder="Иван Иванов"
                  component={Input.Redux} />
              </Line>
              <Line
                label="Ваши email"
                required>
                <Field
                  name="email"
                  placeholder="my@mail.com"
                  component={Input.Redux} />
              </Line>
              <Line
                label="Ваш телефон"
                required>
                <Field
                  name="phone"
                  placeholder="+7 123 456 7890"
                  component={Input.Redux} />
              </Line>
              <Line
                label="Страна проживания">
                <Field
                  name="country"
                  placeholder="Россия"
                  component={Input.Redux} />
              </Line>
              <Line
                label="Город проживания">
                <Field
                  name="city"
                  placeholder="Москва"
                  component={Input.Redux} />
              </Line>
              <Line
                label="Сменить пароль"
                password>
                <Field
                  name="password"
                  placeholder="Введите пароль"
                  component={Input.Redux}
                  half />
                <Field
                  name="password_repeat"
                  placeholder="Подтвердите пароль"
                  component={Input.Redux}
                  half />
              </Line>
              <Line
                label="6-ти значный код GA"
                required>
                <Field
                  name="google_code"
                  placeholder="X X X X X X"
                  component={Input.Redux} />
              </Line>
            </Flex>

            <Button submit>Сохранить</Button>
          </form>
        </Flex>
      </Container>
    )
  }
}

const Line = ({ label, children, password, required, placeholder }) => (
  <Flex
    alignCenter
    fullWidth
    className={styles.line}>
    <Span dark className={styles.label}>
      {label}
      { required && <Span className={styles.gold} withoutLocale>*</Span> }
    </Span>
    {children}
  </Flex>
)


export default reduxForm({
  form: 'profile',
  validate,
})(connect({
  profile: 'user.profile',
  initialValues: 'user.profile'
})(Profile))
