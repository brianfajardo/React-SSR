import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'

class UsersList extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    const { isLoading, users } = this.props
    return (
      <div>
        This is a public users list:
        {isLoading
          ? <p>Loading in 2017...</p>
          : <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
  isLoading: state.users.loading,
})

export default connect(mapStateToProps, { fetchUsers })(UsersList)
