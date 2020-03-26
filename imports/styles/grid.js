import { css } from '@emotion/core'
import { breakpoints, containerWidths } from './variables'
import { breakpointUp } from './utils'

export const container = css`
  display: block;
  margin-left: auto;
  margin-right: auto;

  ${Object.keys(breakpoints).map((breakpoint) => {
    const containerWidth = containerWidths[breakpoint]

    if (!containerWidth) {
      return null
    }

    return breakpointUp(breakpoint, css`
      max-width: ${containerWidth}px;
    `)
  })}
`
