import React from 'react'
import { Route } from 'react-router-dom'

import Landing from './components/Landing'
import UsersPage from './containers/UsersPage'

const Router = () => (
  <div>
    <Route exact path="/" component={Landing} />
    <Route exact path="/users" component={UsersPage} />
  </div>
)

export default Router
