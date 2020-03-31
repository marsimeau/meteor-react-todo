import { css } from '@emotion/core'
import { useResetStyles } from './reset'

export const useGlobalStyles = () => {
  const resetStyles = useResetStyles()

  return css`
    ${resetStyles}
  `
}
