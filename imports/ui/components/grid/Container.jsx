import React from 'react'
import { grid } from '/imports/styles'

const Container = ({ children }) => {
  return (
    <div css={grid.container}>
      {children}
    </div>
  )
}

export default Container
