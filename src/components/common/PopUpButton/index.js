import React, { Component } from 'react'
import Button from './Button'

import styles from './styles.module.scss'
import './styles.scss'

class PopUpButton extends Component {
  state = {
    marginRight: '-305px',
    open: false
  }
  handleMouseOverButton = () => {
    const onClose = (ev) => {
      if (ev.target.closest('.popUp')) return false
      this.setState({ marginRight: '-305px', open: false })
      document.removeEventListener('click', onClose)
    }

    this.setState({ marginRight: 0, open: true })
    document.addEventListener('mouseover', onClose.bind(this))
  }

  render () {
    const { buttonItem, text, activeText, ...rest } = this.props
    const { marginRight, open } = this.state

    return (
      <div className={styles.wrapper} style={{ marginRight }} {...rest}>
        <div className={'popUp'}
          style={{ backgroundColor: open ? '#4a4c66' : 'transparent', color: open ? '#fff' : 'transparent' }}>
          <Button item={buttonItem} onMouseOver={this.handleMouseOverButton}/>
          <div className={styles.popUpText}>{text}</div>
          <div className={styles.popUpButton} style={{ color: open ? '#f9ce43' : 'transparent' }}>{activeText}</div>
        </div>
      </div>
    )
  }
}

export default PopUpButton
