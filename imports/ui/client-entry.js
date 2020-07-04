import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import App from './App'

import '../styles/main.scss'

Meteor.startup(() => {
  render(<App/>, document.getElementById('react-target'))
})
