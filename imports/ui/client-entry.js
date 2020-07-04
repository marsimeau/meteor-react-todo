import '../styles/main.scss'

import React from 'react'
import { Meteor } from 'meteor/meteor'
import { hydrate } from 'react-dom'
import App from './App.client'

Meteor.startup(() => {
  hydrate(<App/>, document.getElementById('react-target'))
})
