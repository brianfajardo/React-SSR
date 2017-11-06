import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// staticContext is the object received from StaticRouter.
// Note: We only have access to staticContext on the serverside
// of things because the client will use BrowserRouter instead.

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.pageNotFound = true

  return (
    <div className="center" style={{ marginTop: '100px' }}>
      <h5>Uh-oh! Page not found.</h5>
      <Link to="/">Return home?</Link>
    </div>
  )
}

NotFoundPage.propTypes = {
  staticContext: PropTypes.object,
}

export default NotFoundPage
