import React, { Component, Fragment } from 'react'

import styles from './style.module.scss'
import { Checkbox } from 'components/reduxForm'

export class Flat extends Component {
  static defaultProps = {
    value: [],
    options: [],
  }

  handleChange = (value) => {
    const { value: currentValue, onChange } = this.props

    if (currentValue.includes(value)) {
      const newValue = [ ...currentValue ]

      newValue.splice(currentValue.indexOf(value), 1)

      onChange(newValue)
    } else {
      onChange([ ...currentValue, value ])
    }
  }

  render() {
    const { options, value: currentValue } = this.props

    return (
      <>
        {
          options.map((option) => {
            let { value, label } = option

            if (typeof option !== 'object') {
              value = option
              label = option
            }

            return (
              <Checkbox.Flat
                key={value}
                onChange={() => this.handleChange(value)}
                label={label}
                value={currentValue.includes(value)}
              />
            )
          })
        }
      </>
    )
  }
}

export const Redux = ({ input, ...props }) => (
  <Flat {...input} {...props} />
)
