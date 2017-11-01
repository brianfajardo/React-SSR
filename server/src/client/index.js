import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'

// Client state is initialized with state preserved from the server.
import store from './store'
import Routes from './Routes'

const App = () => (
  <Provider store={store(window.INITIAL_STATE)}>
    <BrowserRouter>
      {renderRoutes(Routes)}
    </BrowserRouter>
  </Provider>
)

// Breathing life into HTML template sent by server on initial server request.
// Ie. binding event handlers to the DOM.
ReactDOM.hydrate(<App />, document.getElementById('root'))
