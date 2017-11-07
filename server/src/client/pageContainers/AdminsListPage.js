import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { fetchAdmins } from '../actions'
import requireAuth from '../components/higherOrderComponents/requireAuth'

import UsersList from '../components/UsersList'

class AdminsListPage extends Component {
  static propTypes = {
    admins: PropTypes.array,
  }

  componentDidMount() {
    this.props.fetchAdmins()
  }

  renderMeta() {
    return (
      <Helmet>
        <title>Admins List Page</title>
        <meta property="og:title" content="Admins List" />
        <meta property="og:type" content="webpage" />
        <meta property="og:url" content="https://reactjs.org/logo-og.png" />
        <meta property="og:image" content="https://reactjs.org/logo-og.png" />
        <meta
          property="og:description"
          content="Protected resource that can only be accessed after authentication"
        />
      </Helmet>
    )
  }

  render() {
    return (
      <div>
        {this.renderMeta()}
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
  component: connect(mapStateToProps, { fetchAdmins })(
    requireAuth(AdminsListPage)
  ),
  loadData: ({ dispatch }) => dispatch(fetchAdmins()),
}
