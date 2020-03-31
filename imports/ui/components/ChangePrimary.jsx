import React from 'react'
import { useTheme } from '../../styles'

const ChangePrimary = () => {
  const { colors } = useTheme()

  const handleColorChange = (event) => {
    colors.setPrimary(event.target.value)
  }

  return (
    <input type="color" value={colors.primary} onChange={handleColorChange} />
  )
}

export default ChangePrimary
