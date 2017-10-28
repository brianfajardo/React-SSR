import React from 'react'
import { Route } from 'react-router-dom'

import Landing from './components/Landing'

const Router = () => (
  <div>
    <Route exact path="/" component={Landing} />
  </div>
)

export default Router
