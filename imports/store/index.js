import { configureStore } from '@reduxjs/toolkit'
import theme from './theme'

let preloadedState

if (
  global.window &&
  window.__PRELOADED_STATE__
) {
  preloadedState = window.__PRELOADED_STATE__

  delete window.__PRELOADED_STATE__
}

export default configureStore({
  reducer: {
    theme
  },
  preloadedState
})
