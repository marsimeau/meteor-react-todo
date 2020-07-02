import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../store/theme'
import { getPrimary } from '../../store/theme/selectors'

const ChangePrimary = () => {
  const primary = useSelector(getPrimary)
  const dispatch = useDispatch()

  const handleColorChange = (event) => {
    dispatch(actions.setPrimary(event.target.value))
  }

  return (
    <input type="color" value={primary} onChange={handleColorChange} />
  )
}

export default ChangePrimary
