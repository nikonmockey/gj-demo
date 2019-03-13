import React, { Component } from 'react'
import cx from 'classnames'

import { Flex } from 'components/layouts'
import { Digit, Span } from 'components/typo'
import { Line } from 'components/UI'

import styles from './styles.module.scss'


class YieldCalculator extends Component {
  constructor () {
    super()
    this.state = {value: ''}
  }

  handleChange = (event) => {
    const number = Number(event.target.value)
    this.setState({value: number})
    console.log(typeof(this.state.value));
  }

  render () {
    const { coin, balance, children, className} = this.props
    const { value } = this.state

    return (
      <Flex column justifyBetween>
        <input value={value} onChange={this.handleChange} placeholder='Мощность' className={styles.input} />
        <Line>
          <Flex alignCenter f1 column>
            <Span className={styles.title}>Ориентировочный доход за 24 часа</Span>
            <Digit bold className={styles.digits}>
              {
                new Intl
                  .NumberFormat('ru', { minimumFractionDigits: 7})
                  .format(value)
              }
              <sup>BTC</sup>
            </Digit>
            <Digit className={styles.digits}>
              {
                new Intl
                  .NumberFormat('ru', { minimumFractionDigits: 5})
                  .format(value*4)
              }
              <sup>USD</sup>
            </Digit>
          </Flex>
        </Line>
        <Span className={styles.span}>(будет изменяться в зависимости от сложности добычи)</Span>
      </Flex>
    )
  }
}

export { YieldCalculator }
