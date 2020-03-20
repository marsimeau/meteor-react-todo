import React from 'react'
import { Global } from '@emotion/core'
import { global } from '/imports/styles'
import Hello from './components/Hello.jsx'
import Info from './components/Info.jsx'

export const App = () => (
  <div>
    {/* Global styles */}
    <Global styles={global} />
    <h1>Welcome to Meteor!</h1>
    <Hello/>
    <Info/>
  </div>
)
