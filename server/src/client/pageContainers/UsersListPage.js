import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
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

  renderMeta() {
    // Setting Open Graph protocol meta tags with react-helmet.
    // Note: title tag expects a single string child.
    return (
      <Helmet>
        <title>{`Users loaded: ${this.props.users.length}`}</title>
        <meta property="og:title" content="Public users page" />
        <meta property="og:type" content="webpage" />
        <meta property="og:url" content="https://reactjs.org/logo-og.png" />
        <meta property="og:image" content="https://reactjs.org/logo-og.png" />
        <meta
          property="og:description"
          content="A resource that anyone can access without being authenticated."
        />
      </Helmet>
    )
  }

  render() {
    return (
      <div>
        {this.renderMeta()}
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
