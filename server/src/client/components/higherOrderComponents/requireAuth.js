import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export default ComposedComponent => {
  class RequireAuth extends Component {
    render() {
      switch (this.props.auth) {
        case null:
          // Initial Redux auth state. Don't know if the user is auth'd yet.
          return <div>Hang on, checking your authentication status!</div>
        case false:
          // User is not authenticated.
          return <Redirect to="/" />
        default:
          // User is authenticated.
          // Passing this.props from the connect function to the ComposedComponent.
          return <ComposedComponent {...this.props} />
      }
    }
  }

  const mapStateToProps = ({ auth }) => ({ auth })

  return connect(mapStateToProps)(RequireAuth)
}
