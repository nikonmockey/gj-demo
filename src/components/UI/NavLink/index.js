import React from 'react'
import { connect } from 'redaction'
import cx from 'classnames'
import { nav } from 'redux/actions'


export const NavLink = connect({
  pathname: 'router.location.pathname',
})( ({
    pathname,
    to = "/",
    children,
    activeClassName = "active",
    className,
    blank,
    onClick: parentsOnClick,
    ...props,
  }) => {
    const newClassName = cx(className, { [activeClassName]: to === pathname })

    const onClick = (e) => {
      e.preventDefault()
      parentsOnClick && {}.toString.call(parentsOnClick) === '[object Function]'
        ? parentsOnClick()
        : nav.push(to)
    }

    const elProps = {
      className: newClassName,
      onClick,
      ...props,
    }
    return React.createElement('a', elProps, children)
  }
)


NavLink.defaultProps = {
  to: '',
}
