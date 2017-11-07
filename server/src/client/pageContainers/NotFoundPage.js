import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

// staticContext is the object received from StaticRouter.
// Note: We only have access to staticContext on the serverside
// of things because the client will use BrowserRouter instead.

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.pageNotFound = true

  const renderMeta = (
    <Helmet>
      <title>404 Page Not Found</title>
      <meta property="og:title" content="Page not found" />
      <meta property="og:type" content="webpage" />
      <meta property="og:url" content="https://reactjs.org/logo-og.png" />
      <meta property="og:image" content="https://reactjs.org/logo-og.png" />
      <meta
        property="og:description"
        content="User tried visiting an unfamiliar URL path"
      />
    </Helmet>
  )

  return (
    <div className="center" style={{ marginTop: '100px' }}>
      {renderMeta}
      <h5>Uh-oh! Page not found.</h5>
      <Link to="/">Return home?</Link>
    </div>
  )
}

NotFoundPage.propTypes = {
  staticContext: PropTypes.object,
}

export default NotFoundPage
