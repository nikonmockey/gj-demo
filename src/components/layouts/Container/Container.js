import React from 'react'
import { connect } from 'redaction'
import cx from 'classnames'

import { Title } from 'components/typo'

import styles from './styles.module.scss'


export const Container =
  connect({ theme: 'user.theme' })(
    ({ theme,
      children,
      title,
      className,
      mini,
      full,
      half,
      third,
      third2,
      quarter,
      quarter3,
      sixty,
      fourty,
      only,
    }) => (
      <section className={cx(
        styles.container,
        styles[theme],
        className,
        mini && styles.mini,
        full      && styles.full,
        half      && styles.half,
        third     && styles.third,
        third2    && styles.third2,
        quarter   && styles.quarter,
        quarter3  && styles.quarter3,
        sixty     && styles.sixty,
        fourty    && styles.fourty,
        only      && styles.only,
      )}>
        { title && <Title>{title}</Title> }
        { children }
      </section>
    )
  )
