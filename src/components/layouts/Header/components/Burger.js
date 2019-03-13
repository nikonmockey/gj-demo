import React, { Component } from 'react'
import { Icon } from 'components/UI'

import burger from 'assets/burger.png'

export const Burger = ({ onClick, className }) =>
  <Icon src={burger} className={className} onClick={onClick} />

