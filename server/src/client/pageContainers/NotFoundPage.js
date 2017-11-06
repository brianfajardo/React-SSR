import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => (
  <div className="center" style={{ marginTop: '100px' }}>
    <h5>Uh-oh! Page not found.</h5>
    <Link to="/">Return home?</Link>
  </div>
)

export default NotFoundPage
