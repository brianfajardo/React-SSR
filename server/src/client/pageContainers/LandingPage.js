import React from 'react'
import { Helmet } from 'react-helmet'

const LandingPage = () => {
  const renderMeta = (
    <Helmet>
      <title>React SSR</title>
      <meta property="og:title" content="Landing Page" />
      <meta property="og:type" content="homepage" />
      <meta property="og:url" content="https://reactjs.org/logo-og.png" />
      <meta property="og:image" content="https://reactjs.org/logo-og.png" />
      <meta
        property="og:description"
        content="Landing Page for my playground"
      />
    </Helmet>
  )

  return (
    <div className="center" style={{ marginTop: '100px' }}>
      {renderMeta}
      <h3>Landing Page ✈️</h3>
      <p>just trying out serverside React rendering</p>
    </div>
  )
}

export default LandingPage
