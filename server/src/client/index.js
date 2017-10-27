import React from 'react'
import ReactDOM from 'react-dom'

import Landing from './components/Landing'

const App = () => <Landing />

ReactDOM.hydrate(<App />, document.getElementById('root'))
