import { hot } from 'react-hot-loader/root'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'
import MainLayout from './layouts/MainLayout'

const App = () => (
  <div>
    <Provider store={store}>
      <Router>
        <MainLayout />
      </Router>
    </Provider>
  </div>
)

export default hot(App)
