import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Global } from '@emotion/core'
import { Provider } from 'react-redux'
import store from '../store'
import useGlobalStyle from '../styles/global'
import MainLayout from './layouts/MainLayout'

const GlobalStyles = () => {
  const globalStyles = useGlobalStyle()

  return (
    <Global styles={globalStyles} />
  )
}

export const App = () => (
  <div>
    <Provider store={store}>
      <GlobalStyles />
      <Router>
        <MainLayout />
      </Router>
    </Provider>
  </div>
)
