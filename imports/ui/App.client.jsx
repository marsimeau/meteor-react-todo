import { hot } from 'react-hot-loader/root'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'
import MainLayout from './layouts/MainLayout'

const App = () => (
  <Provider store={store}>
    <Router>
      <MainLayout />
    </Router>
  </Provider>
)

export default hot(App)
