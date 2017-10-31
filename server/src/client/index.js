import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import Router from './Router'

const App = () => (
  <Provider store={store()}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
)

// Breathing life into HTML template sent by server on initial server request.
// Ie. binding event handlers to the DOM.
ReactDOM.hydrate(<App />, document.getElementById('root'))
