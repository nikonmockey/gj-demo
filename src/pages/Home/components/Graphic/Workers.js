import React, { Component } from 'react'
import { connect } from 'redaction'
import cx from 'classnames'

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts'
import { Flex } from 'components/layouts'

import styles from './styles.module.scss'


const dataTest = [
  { name: 'a', value: 3 },
  { name: 'a', value: 4 },
  { name: 'a', value: 12 },
  { name: 'a', value: 1 },
  { name: 'a', value: 3 },
  { name: 'a', value: 2 },
  { name: 'a', value: 20 },
  { name: 'a', value: 5 },
]


const Tip = ({ payload }) => (
  <div className={styles.tooltip}>
    <span style={{fontWeight: 700}}>
      { payload && Boolean(payload.length) && payload[0].value.toFixed(2) }
    </span>
  </div>
)

const Empty = () => (
  <Flex center f1>
    <span>Не выбрано ни одного воркера</span>
  </Flex>
)



class Graph extends Component {
  constructor (props) {
    super(props)

    this.point = null
    this.state = { tooltipPosition: null }
  }

  render () {
    const { data, theme } = this.props
    const { tooltipPosition } = this.state
    const timeKey = 'index'
    const isNight = theme === 'night'
    console.log(data)

    return (
      <ResponsiveContainer className={styles.container}>
        <AreaChart
          margin={{ top: 5, right: 5, bottom: 5, left: -36 }}
          data={Boolean(data && data.length) && data || dataTest}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f9ce43" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#f9ce43" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f9ce43" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#f9ce43" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid
            stroke={isNight ? '#52536d' : '#e6eaee'}
            strokeDasharray="2 3" />
          <XAxis dataKey={timeKey} minTickGap={1}
            tick={{
              stroke: isNight ? '#8c8db3' : '#2B2C3C',
              strokeWidth: 0.2 }}
            />
          <YAxis
            tick={{
              stroke: isNight ? '#8c8db3' : '#2B2C3C',
              strokeWidth: 0.2 }}
            />
          <Tooltip
            content={ <Tip />} />
          <Area
            isAnimationActive={false}
            type="linear"
            dataKey="value"
            stroke="#f9ce43"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorUv)"
            className={styles.area} />
        </AreaChart>
      </ResponsiveContainer>
    )
  }
}



class Workers extends Component {
  render() {
    const { workers_checked, ...props } = this.props

    return (
      Boolean(workers_checked && workers_checked.length)
        ? <Graph {...this.props} />
        : <Empty />
    )
  }
}

Workers = connect({
  theme: 'user.theme',
  workers_checked: state => state.home.workers_checked,
})(Workers)

export { Workers }
