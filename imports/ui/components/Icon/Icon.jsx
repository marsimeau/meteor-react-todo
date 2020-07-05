import React from 'react'
import classnames from 'classnames'
import s from './Icon.scss'

/**
 * Icon.
 *
 * @param {Array} props.children - Material icon text
 */
const Icon = ({ className, children, ...attrs }) => {
  return (
    <span
      className={classnames(className, s.material)}
      aria-hidden="true"
      {...attrs}
    >{children}</span>
  )
}

export default Icon
