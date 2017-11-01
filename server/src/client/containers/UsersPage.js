import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchUsers } from '../actions'

import UsersList from '../components/UsersList'

class UsersPage extends Component {
  static propTypes = {
    fetchUsers: PropTypes.func,
    users: PropTypes.array,
    isLoading: PropTypes.bool,
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    const { isLoading, users } = this.props

    return (
      <div>
        This is a public users list:
        {isLoading ? <h1>Loading in 2017 😹</h1> : <UsersList users={users} />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
  isLoading: state.users.loading,
})

// Function used to fetch data before being server-side rendered.
// Ie. Before JSX is passed to renderToString and injected into the
// HTML template, fetch data from API and feed data into this component.
const loadData = () => {
  console.log('UsersPage is trying to load some data maaaan!')
}

export default connect(mapStateToProps, { fetchUsers })(UsersPage)
export { loadData }
