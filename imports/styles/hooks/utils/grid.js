import { css } from '@emotion/core'
import { useTheme } from '../theme'

export const useBreakpoints = () => {
  const { breakpoints } = useTheme()

  const getBreakpointValue = (breakpointKey) => {
    const breakpointValue = breakpoints[breakpointKey]

    if (breakpointValue == null) {
      throw new Error(`breakpoint ${breakpointKey} is not defined`)
    }

    return breakpointValue
  }

  return {
    breakpointUp(breakpointKey, style) {
      const breakpointValue = getBreakpointValue(breakpointKey)

      return css`
        @media (min-width: ${breakpointValue}px) {
          ${style}
        }
      `
    }
  }
}

export const useContainer = () => {
  const { breakpoints, containerWidths } = useTheme()
  const { breakpointUp } = useBreakpoints()

  return css`
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
}
