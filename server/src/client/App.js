import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchAuthUser } from './actions'

import Navbar from './components/Navbar'

class App extends Component {
  static propTypes = {
    route: PropTypes.object,
    auth: PropTypes.object,
    fetchAuthUser: PropTypes.func,
  }

  componentDidMount() {
    this.props.fetchAuthUser()
  }

  render() {
    return (
      <div>
        <Navbar auth={this.props.auth} />
        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }
}

const mapStateToProps = state => ({ auth: state.auth })

export default connect(mapStateToProps, { fetchAuthUser })(App)
