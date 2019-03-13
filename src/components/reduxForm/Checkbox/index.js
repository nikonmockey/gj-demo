import React, { Component } from 'react'

import styles from './style.module.scss'


export class Flat extends Component {

  handleClick = () => {
    const { value, onChange } = this.props

    onChange(!value)
  }

  render() {
    const { label, value, children, className, ...props } = this.props

    return (
      <label key={value} className={className}>
        <input
          className={styles.checkbox}
          type="checkbox"
          {...props}
        />
        <span className={styles.label}>{label || children}</span>
      </label>
    )
  }
}


export const Redux = ({ input, ...props }) => (
  <Flat {...input} {...props} />
)

