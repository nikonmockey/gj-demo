import React, { Component } from 'react'

import { Flex } from 'components/layouts'
import { Span } from 'components/typo'

import styles from './styles.module.scss'


export class Footer extends Component {
  render() {
    const { title } = this.props
    return (
      <footer className={styles.container}>
        <Span withoutLocale>© GoldJob, 2018</Span>
        <a target={'_blank'} href="https://goldjob.com/docs_ru/privacy_policy_en.pdf">
          <Span withoutLocale>Политика Конфиденциальности</Span>
        </a>
        <a target={'_blank'} href="https://goldjob.com/docs_ru/user_agreement_en.pdf">
          <Span withoutLocale>Пользовательское соглашение</Span>
        </a>
      </footer>
    )
  }
}
