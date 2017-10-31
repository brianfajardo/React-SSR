import Landing from './components/Landing'
import UsersPage from './containers/UsersPage'

// react-router-config configuration shape.
const Routes = [
  {
    path: '/',
    component: Landing,
    exact: true,
  },
  {
    path: '/users',
    component: UsersPage,
    exact: true,
  },
]

export default Routes
