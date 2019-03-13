import React, { Component } from 'react'
import { connect } from 'redaction'
import { reduxForm, Field } from 'redux-form'
import cx from 'classnames'

import { auth } from 'redux/actions'

import { Link } from 'react-router-dom'
import { Flex } from 'components/layouts'
import { Button } from 'components/UI'

import styles from './styles.module.scss'


const Comp = ({ handleSubmit }) => {
  const onSubmit = data => auth.login(data)

  return (
    <Flex className={styles.container} alignCenter column>
      <h1>Вход</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          type="text"
          name="login"
          placeholder="Email"
          component="input" />
        <Field
          type="password"
          name="password"
          placeholder="Пароль"
          component="input" />
        <Link className={styles.flat} to="/restore">Забыли пароль?</Link>
        <Button className={styles.btn} submit>Войти</Button>
      </form>
      <Link className={styles.flat} to="/reg">Нет аккаунта? Зарегистрироваться!</Link>
    </Flex>
  )
}

const Login = reduxForm({
  form: 'login'
})(Comp)

export { Login }
