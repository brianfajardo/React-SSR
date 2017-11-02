import React from 'react'
import { renderRoutes } from 'react-router-config'
import PropTypes from 'prop-types'

const App = ({ route }) => (
  <div>
    <h1>HEADER PLACEHOLDER</h1>
    {renderRoutes(route.routes)}
  </div>
)

App.propTypes = {
  route: PropTypes.object,
}

export default App
