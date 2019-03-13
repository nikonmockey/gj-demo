import React from 'react'
import cx from 'classnames'

import { Flex } from 'components/layouts'
import { Span } from 'components/typo'
import { Icon } from 'components/UI'

import styles from './styles.module.scss'

import { ReactComponent as Arrow } from './images/arrow.svg'


const data = [
  { m30: "last30minutes" },
  { h1: "last1hour" },
  { h12: "last12hours" },
  { h24: "last24hours" },
]

export const Hashrate = ({ stats, isNight }) =>
  <Flex column>
    {
      data
        .map( el =>
          <Line
            key={Object.keys(el)[0]}
            stat={ stats[ Object.keys(el)[0] ] }
            text={ Object.values(el)[0] }
            isNight={isNight} />
        )
    }
  </Flex>

const Line = ({ text, stat, dir = true, isNight }) => (
  <Flex className={styles.container} fullWidth alignCenter>
    <Span className={styles.info}>{`TABLE.${text}`}</Span>
    <Flex alignCenter>
      <Flex
        center
        className={cx(
          styles.circle,
          isNight ? dir ? styles.nightGreen : styles.nightRed :
          dir ? styles.green : styles.red
        )}>
          {stat}
      </Flex>
      <Span withoutLocale>H/s</Span>
    </Flex>
    <Arrow className={cx(
      styles.arrow,
      dir ? styles.up : styles.down
    )} />
  </Flex>
)
