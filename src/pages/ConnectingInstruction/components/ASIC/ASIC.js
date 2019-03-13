import React from 'react'
import cx from 'classnames'

import { Flex, Container, Row } from 'components/layouts'
import { Span } from 'components/typo'
import copyIcon from 'assets/copy.svg'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import {
  BTC,
  BCH,
  DASH,
  SXC,
  hCash,
  ZEC,
 } from 'components/common/Currency/images'

import styles from './styles.module.scss'

export const ASIC = () => {
  return (
    <Container full>
      <Flex column third2 className={styles.wrapper}>
        <Span className={styles.span}>
          1) Вы должны быть зарегистрированы на платформе GoldJob.
        </Span>
        <br />
        <Span className={styles.span}>
          2) Зайдите в раздел
          <a className={styles.link} target="_blank" href="/subaccounts">
          "Работа с Субаккаунтами"
          </a>, выберите нужную вам валюту
          и создайте субаккаунт, к которому вы хотите подключить воркера (инструкции
          по созданию и настройке субаккаунта вы найдете непосредственно на странице
          создания субаккаунта)
        </Span>
        <br />
        <Span className={styles.span}>
          3) На своем устройстве вам необходимо указать
          <a className={styles.link} target="_blank" href="https://bitcointalk.org/index.php?topic=1670733.0">
          (пример)
          </a>
        </Span>
        <br />
        <Span className={styles.span}>
          А) URL для подключения к пулу GoldJob именно той валюты, которую вы будете майнить.
        </Span>
        <br />
        <Row>
          <Container half className={styles.cardWrapper}>
            <Flex alignCenter justifyBetween>
              <Flex alignCenter>
                <BCH className={styles.icon}/>
                <Span className={styles.cardSpan}>BITCOINCASH</Span>
              </Flex>
              <Span>sha256</Span>
            </Flex>
            <Flex alignCenter justifyBetween className={styles.margin}>
              <Span className={styles.coinLink}>stratum+tcp://stratum.goldjob.com:14015</Span>
              <CopyToClipboard text='stratum+tcp://stratum.goldjob.com:14015'>
                <img src={copyIcon} className={styles.copyIcon}/>
              </CopyToClipboard>
            </Flex>
          </Container>
          <Container half className={styles.cardWrapper}>
            <Flex alignCenter justifyBetween>
              <Flex alignCenter>
                <BTC className={styles.icon}/>
                <Span className={styles.cardSpan}>BITCOIN</Span>
              </Flex>
              <Span>sha256</Span>
            </Flex>
            <Flex alignCenter justifyBetween className={styles.margin}>
              <Span className={styles.coinLink}>stratum+tcp://stratum.goldjob.com:14000</Span>
              <CopyToClipboard text='stratum+tcp://stratum.goldjob.com:14000'>
                <img src={copyIcon} className={styles.copyIcon}/>
              </CopyToClipboard>
            </Flex>
          </Container>
        </Row>
        <Row>
          <Container half className={styles.cardWrapper}>
            <Flex alignCenter justifyBetween>
              <Flex alignCenter>
                <DASH className={styles.icon}/>
                <Span className={styles.cardSpan}>DASH</Span>
              </Flex>
              <Span>x11</Span>
            </Flex>
            <Flex alignCenter justifyBetween className={styles.margin}>
              <Span className={styles.coinLink}>stratum+tcp://stratum.goldjob.com:10010</Span>
              <CopyToClipboard text='stratum+tcp://stratum.goldjob.com:10010'>
                <img src={copyIcon} className={styles.copyIcon}/>
              </CopyToClipboard>
            </Flex>
            <Flex alignCenter justifyBetween className={styles.margin}>
              <Span className={styles.coinLink}>stratum+tcp://stratum.goldjob.com:10011</Span>
              <CopyToClipboard text='stratum+tcp://stratum.goldjob.com:10011'>
                <img src={copyIcon} className={styles.copyIcon}/>
              </CopyToClipboard>
            </Flex>
          </Container>
          <Container half className={styles.cardWrapper}>
            <Flex alignCenter justifyBetween>
              <Flex alignCenter>
                <SXC className={styles.icon}/>
                <Span className={styles.cardSpan}>LITECOIN</Span>
              </Flex>
              <Span>sha256</Span>
            </Flex>
            <Flex alignCenter justifyBetween className={styles.margin}>
              <Span className={styles.coinLink}>stratum+tcp://stratum.goldjob.com:14025</Span>
              <CopyToClipboard text='stratum+tcp://stratum.goldjob.com:14025'>
                <img src={copyIcon} className={styles.copyIcon}/>
              </CopyToClipboard>
            </Flex>
            <Flex alignCenter justifyBetween className={styles.margin}>
              <Span className={styles.coinLink}>stratum+tcp://stratum.goldjob.com:14020</Span>
              <CopyToClipboard text='stratum+tcp://stratum.goldjob.com:14020'>
                <img src={copyIcon} className={styles.copyIcon}/>
              </CopyToClipboard>
            </Flex>
          </Container>
        </Row>
        <Container full className={styles.cardWrapper}>
          <Flex alignCenter justifyBetween>
            <Flex alignCenter>
              <hCash className={styles.icon}/>
              <Span className={styles.cardSpan}>HERTZ</Span>
            </Flex>
            <Span>' '</Span>
          </Flex>
          <Flex alignCenter justifyBetween className={styles.margin}>
            <Span className={styles.coinLink}>stratum+tcp://stratum.goldjob.com:14015</Span>
            <CopyToClipboard text='stratum+tcp://stratum.goldjob.com:14015'>
              <img src={copyIcon} className={styles.copyIcon}/>
            </CopyToClipboard>
          </Flex>
          <Flex alignCenter justifyBetween className={styles.margin}>
            <Span className={styles.coinLink}>stratum+tcp://stratum.goldjob.com:14015</Span>
            <CopyToClipboard text='stratum+tcp://stratum.goldjob.com:14015'>
              <img src={copyIcon} className={styles.copyIcon}/>
            </CopyToClipboard>
          </Flex>
          <Flex alignCenter justifyBetween className={styles.margin}>
            <Span className={styles.coinLink}>stratum+tcp://stratum.goldjob.com:14015</Span>
            <CopyToClipboard text='stratum+tcp://stratum.goldjob.com:14015'>
              <img src={copyIcon} className={styles.copyIcon}/>
            </CopyToClipboard>
          </Flex>
          <Flex alignCenter justifyBetween className={styles.margin}>
            <Span className={styles.coinLink}>stratum+tcp://stratum.goldjob.com:14015</Span>
            <CopyToClipboard text='stratum+tcp://stratum.goldjob.com:14015'>
              <img src={copyIcon} className={styles.copyIcon}/>
            </CopyToClipboard>
          </Flex>
        </Container>
        <br />
        <Span className={styles.span}>
          Б) Имя субаккаунта (который вы создали в разделе "Работа с Субаккаунтами")
          и через точку придумайте имя воркера ( на английском языке). Например
          <span className={styles.green}> Subaccount</span>.
          <span className={styles.red}>WorkerName</span>
        </Span>
        <br />
        <Span className={styles.span}>
          В) Пароль задайте произвольный, поскольку в данном случае не
          затрагиваются вопросы безопасности. Если кто-то пытается присоединиться
          к вашим серверам по вашей учетной записи, он будет майнить в вашу пользу.
        </Span>
        <br />
        <Span className={styles.span}>
          4) Через 10 минут статистика работы ваших устройств будет отображаться
          на странице
          <a className={styles.link} target="_blank" href="/">
          "Майнинг Dashboard"
          </a> (в разделе нужной вам валюты)
        </Span>
        <br />
        <Span className={styles.span}>
          5) Вы Также можете настроить свои устройства на
          <a className={styles.link} target="_blank" href="https://bitcointalk.org/index.php?topic=1670733.0">
          "Совместную Добычу"
          </a>(это не снизит добычу основной валюты, но позволит вам дополнительно
          добывать некоторые альткоины.)
        </Span>
      </Flex>
    </Container>
  )
}
