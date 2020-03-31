import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Global } from '@emotion/core'
import { ThemeProvider, useGlobalStyles } from '/imports/styles'
import MainLayout from '/imports/ui/layouts/MainLayout'

const GlobalStyles = () => {
  const globalStyles = useGlobalStyles()

  return (
    <Global styles={globalStyles} />
  )
}

export const App = () => (
  <div>
    <ThemeProvider>
      <GlobalStyles />
      <Router>
        <MainLayout />
      </Router>
    </ThemeProvider>
  </div>
)
