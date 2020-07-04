import React from 'react'
import { onPageLoad } from 'meteor/server-render'
import { renderToString } from 'react-dom/server'
import store from '../store'
import App from './App.server'

onPageLoad((sink) => {
  sink.renderIntoElementById('react-target', renderToString(
    <App location={sink.request.url} />
  ))
  sink.renderIntoElementById('inject-data', `window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(/</g, '\\u003c')}`)
})
