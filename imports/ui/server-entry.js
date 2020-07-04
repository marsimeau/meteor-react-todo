import React from 'react'
import { onPageLoad } from 'meteor/server-render'
import { renderToString } from 'react-dom/server'
import { Helmet } from 'react-helmet'
import store from '../store'
import App from './App.server'

onPageLoad((sink) => {
  // Render React App

  sink.renderIntoElementById('react-target', renderToString(
    <App location={sink.request.url} />
  ))

  // Render Meta Data

  const { htmlAttributes, title, meta, link } = Helmet.renderStatic()

  sink.request.htmlAttributes = htmlAttributes

  sink.appendToHead(title.toString() + meta.toString() + link.toString())

  // Prepare client hydration

  sink.renderIntoElementById('inject-data', `window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(/</g, '\\u003c')}`)
})
