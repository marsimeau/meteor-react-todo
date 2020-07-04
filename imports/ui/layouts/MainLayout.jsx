import React from 'react'
import { Helmet } from 'react-helmet'
import { Switch, Route, useLocation } from 'react-router-dom'
import { getPathLocale } from '../../utils/locale'

import { mainLayoutRoutes } from '../../routes'

const MainLayout = () => {
  const location = useLocation()

  return (
    <div>
      <Helmet
        defaultTitle="Meteor React Todo"
        titleTemplate="%s | Meteor React Todo"
      >
        <html lang={getPathLocale(location.pathname)} />
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
