import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchUsers } from '../actions'

import UsersList from '../components/UsersList'

class UsersListPage extends Component {
  static propTypes = {
    fetchUsers: PropTypes.func,
    users: PropTypes.array,
    isLoading: PropTypes.bool,
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    return (
      <div>
        This is a public users list:
        <UsersList users={this.props.users} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
  isLoading: state.users.loading,
})

export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersListPage),

  // Function used to fetch data before being server-side rendered.
  // Manually dispatching (from store) fetchUsers action creator to make
  // our API request. To be done before JSX is passed to renderToString
  // and injected into the HTML template. Note this RETURNS A PROMISE!
  loadData: ({ dispatch }) => dispatch(fetchUsers()),
}
