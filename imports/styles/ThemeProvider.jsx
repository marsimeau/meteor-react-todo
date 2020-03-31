import React, { createContext, useState } from 'react'
import theme from './variables'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  // Create theme states
  const [primary, setPrimary] = useState(theme.colors.primary)

  // Create theme copy
  const themeContextValue = {
    ...theme
  }

  // Add dynamic state and setters to context value
  themeContextValue.colors.primary = primary
  themeContextValue.colors.setPrimary = setPrimary

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export {
  ThemeContext,
  ThemeProvider
}
