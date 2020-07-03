import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { mainLayoutRoutes } from '../../routes'

const MainLayout = () => {
  return (
    <div>
      <Switch>
        {mainLayoutRoutes.map(route => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </div>
  )
}

export default MainLayout
