import React from 'react'
import { StaticRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'
import MainLayout from './layouts/MainLayout'

const App = ({ location }) => (
  <div>
    <Provider store={store}>
      <Router location={location}>
        <MainLayout />
      </Router>
    </Provider>
  </div>
)

export default App
