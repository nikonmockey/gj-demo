import React from 'react'
import cx from 'classnames'

import styles from './styles.module.scss'


export const Flex = ({
    children,
    f1,
    column,
    center,
    justifyBetween,
    alignCenter,
    alignLeft,
    fullWidth,
    half,
    third,
    third2,
    quarter,
    stretch,
    wrap,
    relative,
    className,
    ...props,
  }) =>
    <div
      className={ cx(
        styles.flex,
        className,
        f1              && styles.f1,
        column          && styles.column,
        center          && styles.center,
        justifyBetween  && styles.jcsb,
        alignCenter     && styles.aic,
        alignLeft       && styles.ail,
        fullWidth       && styles.w100,
        half            && styles.half,
        third           && styles.third,
        third2          && styles.third2,
        quarter         && styles.quarter,
        stretch         && styles.stretch,
        wrap            && styles.wrap,
        relative        && styles.relative,
      )}
      {...props}
      >
      {children}
    </div>
