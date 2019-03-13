import React from 'react'
import cx from 'classnames'

import { Flex, Container } from 'components/layouts'
import { Title, Span } from 'components/typo'
import copyIcon from 'assets/copy.svg'

import styles from './styles.module.scss'

export const GPU = () => {
  return (
    <Container full>
      <Flex column third2 className={styles.wrapper}>
        <Title>На данный момент на GPU оборудовании с нами можно майнить только Zcash</Title>
        <br />
        <br />
        <Span className={styles.span}>
          Для этого необходимо:
        </Span>
        <br />
        <Span className={styles.span}>
          1) Быть зарегистрированым на платформе GoldJob.
        </Span>
        <br />
        <Span className={styles.span}>
          2) Зайдите в раздел
          <a className={styles.link} target="_blank" href="https://bitcointalk.org/index.php?topic=1670733.0">
            "Работа с Субаккаунтами"
          </a>, выберите нужную вам валюту и создайте субаккаунт, к которому вы
          хотите подключить воркера (инструкции по созданию и настройке
          субаккаунта вы найдете непосредственно на странице создания субаккаунта)
        </Span>
        <br />
        <Span className={styles.span}>
          3) Скачайте один из предложенных майнеров Zach (или используйте свой,
          если он уже установлен):
        </Span>
        <br />
        <Span className={styles.span}>
          б) Windows - AMD
        </Span>
        <Span className={styles.span}>
          б) Windows - NVIDIA
        </Span>
        <Span className={styles.span}>
          в) Linux - AMD
        </Span>
        <Span className={styles.span}>
          г) Linux - NVIDIA
        </Span>
        <br />
        <Span className={styles.span}>
          4) В настройках вашего майнера вам необходимо:
        </Span>
        <br />
        <Span className={styles.span}>
          а) Server (адрес пула): stratum+tcp//stratum.goldjob.com
        </Span>
        <Span className={styles.span}>
          б) Port: 3333
        </Span>
        <Span className={styles.span}>
          в) <span className={styles.green}>Subaccount</span>.
          <span className={styles.red}>WorkerName</span>: перед точкой - это имя
          субаккаунта (который вы создали в разделе
          <a className={styles.link} target="_blank" href="https://bitcointalk.org/index.php?topic=1670733.0">
            "Работа с Субаккаунтами"
          </a>) и через точку придумайте имя воркера (на английском языке).
        </Span>
        <br />
        <Span className={styles.span}>
          5) Сохраните настройки.
        </Span>
        <Span className={styles.span}>
          6) Запустите майнер.
        </Span>
        <Span className={styles.span}>
          7) Через 10 минут статистика работы ваших устройств будет отображаться
          на странице
          <a className={styles.link} target="_blank" href="https://bitcointalk.org/index.php?topic=1670733.0">
            "Майнинг Dashboard"
          </a>(в разделе Zcash)
        </Span>
      </Flex>
    </Container>
  )
}
