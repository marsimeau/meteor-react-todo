import React from 'react'
import loadable from '@loadable/component'
import Loading from '/imports/ui/components/Loading'

const renderPage = (Page, Fallback = Loading) => {
  return (
    <div>
      <Page fallback={<Fallback />} />
    </div>
  )
}

const Home = loadable(() => import('/imports/ui/pages/Home'))

export const mainLayoutRoutes = [
  {
    exact: true,
    path: '/',
    render: () => renderPage(Home)
  }
]
