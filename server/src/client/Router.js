import React from 'react'
import { Route } from 'react-router-dom'

import Landing from './components/Landing'
import UsersList from './components/UsersList'

const Router = () => (
  <div>
    <Route exact path="/" component={Landing} />
    <Route exact path="/users" component={UsersList} />
  </div>
)

export default Router
