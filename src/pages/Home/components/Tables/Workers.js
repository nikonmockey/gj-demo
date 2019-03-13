import React from 'react'
import cx from 'classnames'

import { home } from 'redux/actions'

import { Line } from 'components/UI'
import { Flex, Table } from 'components/layouts'
import { Span } from 'components/typo'
import { Checkbox } from 'components/reduxForm'

import { head, data } from './WorkersData'

import styles from './styles.module.scss'


export const Workers = ({ label, children, className }) => {

  const onClick = worker => home.addWorker(worker)

  return (
    <Flex>
      <Table
        head={head}
        data={data}
        onClick={onClick}
        checkbox={ <Checkbox.Redux /> } />
    </Flex>
)}
