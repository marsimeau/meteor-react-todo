import React from 'react'
import Home from './ui/pages/Home'

export const mainLayoutRoutes = [
  {
    exact: true,
    path: '/',
    render: () => <Home />
  }
]
