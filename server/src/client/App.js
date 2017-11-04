import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import PropTypes from 'prop-types'

import Navbar from './components/Navbar'

class App extends Component {

  static propTypes = {
    route: PropTypes.object,
  }

  render() {
    return (
      <div>
        <Navbar />
        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }
}

export default App
