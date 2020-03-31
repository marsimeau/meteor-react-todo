import React from 'react'
import { useContainer } from '/imports/styles'

const Container = ({ children }) => {
  const container = useContainer()

  return (
    <div css={container}>
      {children}
    </div>
  )
}

export default Container
