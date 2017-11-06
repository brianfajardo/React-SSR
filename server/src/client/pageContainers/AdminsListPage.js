import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchAdmins } from '../actions'

import UsersList from '../components/UsersList'

class AdminsListPage extends Component {
  static propTypes = {
    admins: PropTypes.array,
  }

  componentDidMount() {
    this.props.fetchAdmins()
  }

  render() {
    console.log('admins list:', this.props.admins)
    return (
      <div>
        This is a protected resource and should only be visible after
        authentication!
        <div>
          Admins list:
          <UsersList users={this.props.admins} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({ admins: users.admins })

export default {
  component: connect(mapStateToProps, { fetchAdmins })(AdminsListPage),
  loadData: ({ dispatch }) => dispatch(fetchAdmins()),
}
