import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'

import store from './store'
import Routes from './Routes'

// After initial server request, when bundle.js is loaded, preserve and
// attach event handlers (hydrate). Initialize client state from state
// preserved from the server as JSON.

ReactDOM.hydrate(
  <Provider store={store(window.INITIAL_STATE)}>
    <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
