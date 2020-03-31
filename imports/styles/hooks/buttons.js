import { useTheme } from './theme'
import { css } from '@emotion/core'

export const useButton = () => {
  const { colors } = useTheme()

  return css`
    background-color: ${colors.primary};
    border-radius: 3px;
    color: ${colors.white};
    display: inline-block;
    padding: 5px 10px;
  `
}
