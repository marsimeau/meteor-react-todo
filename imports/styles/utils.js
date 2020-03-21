import { breakpoints } from './variables'

export const breakpointUp = (breakpointKey) => {
  const breakpointValue = breakpoints[breakpointKey]

  if (breakpointValue == null) {
    throw new Error(`breakpoint ${breakpointKey} is not defined`)
  }

  return `(min-width: ${breakpointValue}px)`
}
