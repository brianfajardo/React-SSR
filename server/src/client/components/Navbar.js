import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ auth }) => {

  const LoginButton = auth
    ? <a href="/api/logout">Logout</a>
    : <a href="/api/auth/facebook">Login with Facebook</a>

  return (
    <nav>
      <div className="nav-wrapper light-blue">
        <Link to="/" className="brand-logo left">⛵️ Playground</Link>
        <ul className="right">
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/admins">Admins</Link></li>
          <li>{LoginButton}</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
