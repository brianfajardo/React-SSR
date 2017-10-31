import React from 'react'
import PropTypes from 'prop-types'

const UsersList = ({ users }) => (
  <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
)

UsersList.propTypes = {
  users: PropTypes.array,
}

export default UsersList
