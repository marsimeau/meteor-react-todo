import React from 'react'

const Container = ({ children, ...attrs }) => {
  return (
    <div className="c-container" {...attrs}>
      {children}
    </div>
  )
}

export default Container
