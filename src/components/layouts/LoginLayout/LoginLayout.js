import React from 'react'

import { Link } from 'react-router-dom'
import { Flex } from 'components/layouts'

import logo from './images/logotext.png'
import styles from './styles.module.scss'


export const LoginLayout = ({ children }) => (
  <Flex className={styles.container} column>
    <Flex className={styles.header} justifyBetween alignCenter>
      <img src={logo} alt=""/>
      <Flex>
        <li>О платформе</li>
        <li>Инвестору</li>
        <li>Майнеру</li>
        <li>Трейдеру</li>
      </Flex>
      <Flex>
        <button className={styles.login}>
          <Link to="/login">Вход</Link>
        </button>
        <button className={styles.reg}>
          <Link to="/reg">Регистрация</Link>
        </button>
      </Flex>
    </Flex>
    <Flex className={styles.children} center>
      {children}
    </Flex>
    <Flex className={styles.footer} justifyBetween alignCenter>
      <img src={logo} alt=""/>
      <Flex className={styles.info}>
        <span>© GoldJob, 2018</span>
        <a target="_blank" href="https://goldjob.com/docs_ru/privacy_policy_en.pdf">Политика конфиденциальности</a>
        <a target="_blank" href="https://goldjob.com/docs_ru/user_agreement_en.pdf">Пользовательское соглашение</a>
        <a href="">Частые вопросы</a>
      </Flex>
      <Flex className={styles.social}>
        <a className={styles.fb} target="_blank" href="https://www.facebook.com/goldjobinternational/" />
        <a className={styles.yt} target="_blank" href="https://www.youtube.com/channel/UCOp5XtYQRL6vXAQJw7L8h7w" />
        <a className={styles.tg} target="_blank" href="https://t.me/goldjobnews" />
        <a className={styles.ig} target="_blank" href="https://www.instagram.com/goldjob_official/" />
        <a className={styles.vk} target="_blank" href="https://vk.com/goldjobinternational" />
      </Flex>
    </Flex>
  </Flex>
)

