import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPrimary, getPrimary } from '../../store/theme'

const ChangePrimary = () => {
  const primary = useSelector(getPrimary)
  const dispatch = useDispatch()

  const handleColorChange = (event) => {
    dispatch(setPrimary(event.target.value))
  }

  return (
    <input type="color" value={primary} onChange={handleColorChange} />
  )
}

export default ChangePrimary
