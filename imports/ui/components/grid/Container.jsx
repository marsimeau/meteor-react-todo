import React from 'react'
import { useContainerStyle } from '../../../styles/base/grid'

const Container = ({ children }) => {
  const container = useContainerStyle()

  return (
    <div css={container}>
      {children}
    </div>
  )
}

export default Container
