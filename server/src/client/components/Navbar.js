import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ auth }) => {

  const LoginButton = auth
    ? <a href="/api/logout">Logout</a>
    : <a href="/api/auth/facebook">Login</a>

  return (
    <div>
      React SSR Playground
      <p>Current status: {auth ? 'AUTHORIZED' : 'UNAUTHORIZED'}</p>
      <ul>
        <Link to="/users">Users</Link>
        <Link to="/admins">Admins</Link>
        {LoginButton}
      </ul>
    </div>
  )
}

export default Navbar
