import React from 'react'
import classnames from 'classnames'
import { container } from './Container.scss'

const Container = ({ className, children, ...attrs }) => {
  return (
    <div className={classnames(className, container)} {...attrs}>
      {children}
    </div>
  )
}

export default Container
