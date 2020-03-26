import { css } from '@emotion/core'
import { breakpoints } from './variables'

export const breakpointUp = (breakpointKey, properties) => {
  const breakpointValue = breakpoints[breakpointKey]

  if (breakpointValue == null) {
    throw new Error(`breakpoint ${breakpointKey} is not defined`)
  }

  return css`
    @media (min-width: ${breakpointValue}px) {
      ${properties}
    }
  `
}
