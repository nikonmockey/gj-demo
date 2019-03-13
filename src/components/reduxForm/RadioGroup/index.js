import React, { Component } from 'react'

import styles from './style.module.scss'


export class Flat extends Component {

  handleRadioClick = (value) => {
    const { onChange } = this.props

    onChange(value)
  }

  render() {
    const { options, value: currentValue } = this.props

    return (
      <>
        {
          options.map(({ label, value }) => (
            <label key={value}>
              <input
                className={styles.radio}
                type="radio"
                checked={value === currentValue}
                onChange={() => this.handleRadioClick(value)} />
              <span className={styles.label}>{label}</span>
            </label>
          ))
        }
      </>
    )
  }
}


export const Redux = ({ input, ...props }) => (
  <Flat {...input} {...props} />
)
