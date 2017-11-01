import Landing from './components/Landing'
import UsersPage, { loadData } from './containers/UsersPage'

// react-router-config configuration shape.
// For use with data loading in serverside rendering.
const Routes = [
  {
    path: '/',
    exact: true,
    component: Landing,
  },
  {
    path: '/users',
    exact: true,
    component: UsersPage,
    loadData,
  },
]

export default Routes
