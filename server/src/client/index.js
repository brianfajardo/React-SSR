import React from 'react'
import ReactDOM from 'react-dom'

import Landing from './components/Landing'

const App = () => <Landing />

// Breathing life into HTML template sent by server on initial server request.
// Ie. binding event handlers to the DOM.
ReactDOM.hydrate(<App />, document.getElementById('root'))
