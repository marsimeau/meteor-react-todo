import { css } from '@emotion/core'
import { breakpoints, containers } from './variables'
import { breakpointUp } from './utils'

export const container = css`
  display: block;
  margin-left: auto;
  margin-right: auto;

  ${Object.keys(breakpoints).map((breakpoint) => {
    const container = containers[breakpoint]

    if (!container) {
      return null
    }

    return css`
      @media ${breakpointUp(breakpoint)} {
        max-width: ${container}px;
      }
    `
  })}
`
