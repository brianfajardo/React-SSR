import App from './App'
import LandingPage from './pageContainers/LandingPage'
import UsersListPage from './pageContainers/UsersListPage'
import AdminsListPage from './pageContainers/AdminsListPage'
import NotFoundPage from './pageContainers/NotFoundPage'

// react-router-config configuration shape.
// For use with data loading in serverside rendering.
const Routes = [
  {
    ...App,
    routes: [
      {
        path: '/',
        exact: true,
        component: LandingPage,
      },
      {
        path: '/users',
        exact: true,
        // Avoiding naming collisions with similar loadData functions.
        ...UsersListPage,
      },
      {
        path: '/admins',
        exact: true,
        ...AdminsListPage,
      },
      {
        // If a path is not specified and does not match any other route,
        // React-router will automatically show this component.
        component: NotFoundPage,
      },
    ],
  },
]

export default Routes
