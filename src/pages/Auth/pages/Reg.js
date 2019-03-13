import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import { auth } from 'redux/actions'

import { Link } from 'react-router-dom'
import { Flex } from 'components/layouts'
import { Checkbox } from 'components/reduxForm'
import { Button } from 'components/UI'

import styles from './styles.module.scss'


const Comp = ({ handleSubmit }) => {
  const onSubmit = data => auth.register(data)

  return (
    <Flex className={styles.container} alignCenter column>
      <h1>Регистрация</h1>
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
        <span className={styles.span}>Минимальная длина пароля — 8 символов</span>
        <Checkbox.Redux className={styles.checkbox}>
          Я принимаю условия пользовательского соглашения и даю своё согласие на обработку моей персональной информации на условиях, определённых Политикой конфиденциальности.
        </Checkbox.Redux>
        <Button className={styles.btn} submit>Зарегистрироваться</Button>
      </form>
      <Link className={styles.flat} to="/login">Уже зарегистрирован?</Link>
    </Flex>
  )
}

const Reg = reduxForm({
  form: 'reg'
})(Comp)

export { Reg }
