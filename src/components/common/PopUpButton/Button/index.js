import React from 'react'

import styles from './styles.module.scss'

const Button = ({ classes, item, onMouseOver }) => {
  return (
    <button className={styles.pulseButton} onMouseOver={onMouseOver}>
      {item}
    </button>
  )
}

export default Button
