import React, { Component } from 'react'
import { connect } from 'redaction'
import { reduxForm, Field } from 'redux-form'
import cx from 'classnames'

import { auth } from 'redux/actions'

import { Link } from 'react-router-dom'
import { Flex } from 'components/layouts'
import { Checkbox } from 'components/reduxForm'
import { Button } from 'components/UI'

import styles from './styles.module.scss'


const Comp = ({ handleSubmit }) => {
  const onSubmit = data => auth.restore(data)

  return (
    <Flex className={styles.container} alignCenter column>
      <h1>Сброс пароля</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          type="text"
          name="login"
          placeholder="Email"
          component="input" />
        <Button className={styles.btn} submit>Сбросить пароль</Button>
      </form>
      <Link className={styles.flat} to="/reg">Нет аккаунта? Зарегистрироваться!</Link>
      <Link className={styles.flat} to="/login">Уже зарегистрирован?</Link>
    </Flex>
  )
}

const Restore = reduxForm({
  form: 'restore'
})(Comp)

export { Restore }
