import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Navbar = ({ auth }) => (
  <div>
    React SRR Playground
    <p>Auth status is: {auth ? 'true' : 'false'}</p>
    <ul>
      <Link to="/users">Users</Link>
      <Link to="/admins">Admins</Link>
      <button>Login/Logout</button>
    </ul>
  </div>
)

Navbar.propTypes = {
  auth: PropTypes.object,
}

export default Navbar
