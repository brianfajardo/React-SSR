import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Router from './Router'

const App = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
)

// Breathing life into HTML template sent by server on initial server request.
// Ie. binding event handlers to the DOM.
ReactDOM.hydrate(<App />, document.getElementById('root'))
