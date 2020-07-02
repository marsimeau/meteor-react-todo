import { css } from '@emotion/core'
import { useSelector } from 'react-redux'
import { getPrimary } from '../../store/theme/selectors'
import theme from '../theme'

export const useButtonStyle = () => {
  const primary = useSelector(getPrimary)

  const { colors } = theme

  return css`
    background-color: ${primary};
    border-radius: 3px;
    color: ${colors.white};
    display: inline-block;
    padding: 5px 10px;
  `
}
