import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'

import store from './store'
import Routes from './Routes'

const App = () => (
  <Provider store={store()}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>
)

// Breathing life into HTML template sent by server on initial server request.
// Ie. binding event handlers to the DOM.
ReactDOM.hydrate(<App />, document.getElementById('root'))
