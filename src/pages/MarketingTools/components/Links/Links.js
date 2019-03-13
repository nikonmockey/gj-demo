import React from 'react'
import cx from 'classnames'

import { Flex, Container } from 'components/layouts'
import { Title, Span, Subhead } from 'components/typo'
import copyIcon from 'assets/copy.svg'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import styles from './styles.module.scss'

export const Links = ({ isNight }) => {
  return (
    <Container full>
      <Flex column half className={styles.wrapper}>
        <Span className={styles.span}>
          Для привлечения пользователей на платформу вы можете из
          предложеных ссылок ниже (в зависимости от целевой аудитории и задачи).
          Перед стартом своего продвижение, обязательно ознакомьтесь с
          <a className={styles.link} target="_blank" href="/partner-rules"> Правилами партнера</a>
        </Span>
        <br />
        <Flex column className={cx(styles.box, isNight && styles.boxNight)}>
          <Span className={styles.span}>
            Все ссылки работаю одинаково - при переходе по ней, вашему потенциальному
            партнеру закрепляется в cookie ваш партнерский id. Cookie сохраняются
            в браузере потенциального партнера/клиента на 30 дней и если он
            в течении данного срока регистрируется на нашем сайте, то вы получаете
            комисионные от его прибыли (с учетом
            <a className={styles.link} target="_blank" href="/partner-rewards">
            маркетинг плана
            </a>
            )
          </Span>
          <br />
          <Span className={styles.span}>
            Пользователь нашей платформы закрепляется именно под
            партнером, по чьей ссылке был последний переход перед регистрацией.
          </Span>
        </Flex>
        <br />
        <Subhead>Ваши партнерские ссылки</Subhead>
        <br />
        <Span className={styles.span}>1) Ссылка на страницу "О платформе"</Span>
        <br />
        <Flex>
          <a className={cx(styles.link, styles.linkIndent)}
            target="_blank" href="https://goldjob.com/?r=Sy2uWK5bm">
            https://goldjob.com/?r=Sy2uWK5bm
          </a>
          <CopyToClipboard text='https://goldjob.com/?r=Sy2uWK5bm'>
            <img className={styles.icon} src={copyIcon}/>
          </CopyToClipboard>
        </Flex>
        <br />
        <Span className={styles.span}>2) Ссылка на страницу "Инвестору"</Span>
        <br />
        <Flex>
          <a className={cx(styles.link, styles.linkIndent)}
            target="_blank" href="https://goldjob.com/torgoviy-bot/?r=Sy2uWK5bm">
            https://goldjob.com/torgoviy-bot/?r=Sy2uWK5bm
          </a>
          <CopyToClipboard text='https://goldjob.com/torgoviy-bot/?r=Sy2uWK5bm'>
            <img className={styles.icon} src={copyIcon}/>
          </CopyToClipboard>
        </Flex>
        <br />
        <Span className={styles.span}>3) Ссылка на страницу "Майнеру"</Span>
        <br />
        <Flex>
          <a className={cx(styles.link, styles.linkIndent)}
            target="_blank" href="https://goldjob.com/pool/?r=Sy2uWK5bm">
            https://goldjob.com/pool/?r=Sy2uWK5bm
          </a>
          <CopyToClipboard text='https://goldjob.com/pool/?r=Sy2uWK5bm'>
            <img className={styles.icon} src={copyIcon}/>
          </CopyToClipboard>
        </Flex>
        <br />
        <Span className={styles.span}>4) Ссылка на страницу "Форма регистрации"</Span>
        <br />
        <Flex>
          <a className={cx(styles.link, styles.linkIndent)}
            target="_blank" href="https://bot.goldjob.com/user/signup/?r=Sy2uWK5bm ">
            https://bot.goldjob.com/user/signup/?r=Sy2uWK5bm
          </a>
          <CopyToClipboard text='https://bot.goldjob.com/user/signup/?r=Sy2uWK5bm'>
            <img className={styles.icon} src={copyIcon}/>
          </CopyToClipboard>
        </Flex>
      </Flex>
    </Container>
  )
}
