import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'
import MainLayout from './layouts/MainLayout'

export const App = () => (
  <div>
    <Provider store={store}>
      <Router>
        <MainLayout />
      </Router>
    </Provider>
  </div>
)
