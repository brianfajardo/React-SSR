import Landing from './components/Landing'
import UsersPage from './containers/UsersPage'

// react-router-config configuration shape.
// For use with data loading in serverside rendering.
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
