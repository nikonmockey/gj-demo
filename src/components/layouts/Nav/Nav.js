import React from 'react'

import { Flex } from 'components/layouts'
import { Logo, Burger, Icon, NavLink } from 'components/UI'

import { Section } from './Section'

import navigation from './navigation'

import styles from './styles.module.scss'


export const Nav = () => (
  <Flex
    className={styles.container}
    id="nav"
    column>
    <div
      className={styles.close}
      onClick={() =>
        document
          .getElementById("nav")
          .classList
          .toggle("opened-nav")}>
      ⅹ
    </div>

    <NavLink to="/">
      <Flex className={styles.wrapperLogo} alignCenter>
        <Logo className={styles.logo} />
        <div className={styles.logotext} />
      </Flex>
    </NavLink>

    <div className={styles.hr} />

    <aside>
      {
        navigation.map( (section, ix) =>
          <Section {...section} />
        )
      }
    </aside>
  </Flex>
)
