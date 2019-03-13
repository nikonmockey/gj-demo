import React from 'react'
import cx from 'classnames'

import { Flex } from 'components/layouts'
import { Span } from 'components/typo'
import { connect } from 'redaction'

import styles from './styles.module.scss'


export const Table = connect({ theme: 'user.theme' })(
  ({
  theme,
  head,
  data,
  foot,
  children,
  withoutHead,
  onClick,
  checkbox,
}) => {
  return (
    <Flex className={cx(styles.container, styles[theme])} column fullWidth f1>
      {
        !withoutHead && (
          <Flex fullWidth alignCenter>
            {
              head.map( ({ name, value, basis }, ix) => (
                <Span
                  dark
                  key={ix}
                  id={value}
                  style={{ flexBasis: basis }}
                  className={styles.headRow}
                  withoutLocale={!value} />
              ))
            }
          </Flex>
        )
      }
      {
        data.map( (row, rowIX) => (
          <Flex
            onClick={onClick && ( () => onClick(row) )}
            key={rowIX}
            fullWidth
            alignCenter>
            {
              head.map( (col, colIX) => (
                () => {
                    switch(col.name) {
                      case 'invest':
                      case 'checkbox': return checkbox
                      default: return <Basic row={row} col={col} />
                    }
                })()
              )
            }
          </Flex>
        ))
      }
    </Flex>
  )
}
)


const Basic = ({ row, col }) => (
  <Span style={{ flexBasis: col.basis }}  withoutLocale>
    {row[col.name]}
  </Span>
)

// const CB = ({ row, col }) => (
//   <Checkbox.Redux />
// )
