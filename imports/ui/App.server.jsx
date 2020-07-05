import React from 'react'
import { StaticRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'
import MainLayout from './layouts/MainLayout'

const App = ({ location }) => (
  <Provider store={store}>
    <Router location={location}>
      <MainLayout />
    </Router>
  </Provider>
)

export default App
