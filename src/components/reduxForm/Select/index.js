import React from 'react'

import icon from './cursor-icon.svg'
import styles from './style.module.scss'


export const Flat = ({ name, options, selected }) => (
  <div className={styles.container}>
    <select className={styles.select} name={name} value={selected}>
      {
        options.map( (option, ix) => (
          <option
            className={styles.option}
            value={ix}
            key={ix}>
            {option}
          </option>
        ))
      }
    </select>
    <img className={styles.icon} src={icon} alt="" />
  </div>
)


export const Redux = ({ input, ...props }) =>
  <Flat
    {...input}
    {...props}
  />
