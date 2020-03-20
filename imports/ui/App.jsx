import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Global } from '@emotion/core'
import { global } from '/imports/styles'
import MainLayout from '/imports/ui/layouts/MainLayout'

export const App = () => (
  <div>
    {/* Global styles */}
    <Global styles={global} />
    <Router>
      <MainLayout />
    </Router>
  </div>
)
