import { css } from '@emotion/core'
import theme from '../theme'

export const mediaBreakpointUp = (breakpointKey, style) => {
  const { breakpoints } = theme

  const breakpointValue = breakpoints[breakpointKey]

  if (breakpointValue == null) {
    throw new Error(`breakpoint ${breakpointKey} is not defined`)
  }

  return css`
    @media (min-width: ${breakpointValue}px) {
      ${style}
    }
  `
}

export const useContainerStyle = () => {
  const { containerWidths } = theme

  return css`
    display: block;
    margin-left: auto;
    margin-right: auto;

    ${Object.entries(containerWidths).map(([breakpoint, containerWidth]) => {
      if (!containerWidth) {
        return null
      }

      return mediaBreakpointUp(breakpoint, css`
        max-width: ${containerWidth}px;
      `)
    })}
  `
}
