import React, { Component, createRef } from 'react'
import cx from 'classnames'
import { reduxForm, Field } from 'redux-form'

import { user, subaccounts } from 'redux/actions'
import { REsitekey } from 'helpers'

import ReCAPTCHA from "react-google-recaptcha"
import { Container, Flex } from 'components/layouts'
import { Button } from 'components/UI'
import { Currency } from 'components/common'

import styles from '../../styles.module.scss'

class SubForm extends Component {
  recaptchaRef = createRef()

  addSubaccount = data => {
    this.recap()
    subaccounts.addSubaccount({ title: "makrduk", captcha: data })
  }

  render() {
    const { handleSubmit, onSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <ReCAPTCHA
          ref={this.recaptchaRef}
          sitekey={REsitekey}
          onChange={this.addSubaccount}
        />
      </form>
    )
  }
}

SubForm = reduxForm({
  list: 'subaccounts.subaccounts',
})(SubForm)

export { SubForm }
