import { css } from '@emotion/core'
import theme from './theme'
import useResetStyle from './base/reset'

export default () => {
  const { fontFamily } = theme
  const resetStyle = useResetStyle()

  return css`
    /* Font imports */
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

    /* Resets */
    ${resetStyle}

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
