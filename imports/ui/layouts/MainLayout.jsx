import React from 'react'
import { Helmet } from 'react-helmet'
import { Switch, Route } from 'react-router-dom'

import { mainLayoutRoutes } from '../../routes'

const MainLayout = () => {
  return (
    <div>
      <Helmet
        defaultTitle="Meteor React Todo"
        titleTemplate="%s | Meteor React Todo"
      >
        <html lang="en" />
      </Helmet>
      <Switch>
        {mainLayoutRoutes.map(route => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </div>
  )
}

export default MainLayout
