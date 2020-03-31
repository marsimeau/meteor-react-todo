import { css } from '@emotion/core'
import { useTheme } from '../theme'
import { useResetStyles } from './reset'

export const useGlobalStyles = () => {
  const { fontFamily } = useTheme()

  const resetStyles = useResetStyles()

  return css`
    /* Font imports */
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

    /* Resets */
    ${resetStyles}

    /* General styles */
    html {
      font-size: 16px;
    }

    body {
      font-family: ${fontFamily.base};
      font-size: 1rem;
    }
  `
}
