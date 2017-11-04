import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = props => (
  <div>
    React SRR Playground
    <ul>
      <Link to="/users">Users</Link>
      <Link to="/admins">Admins</Link>
      <button>Login/Logout</button>
    </ul>
  </div>
)

export default Navbar
