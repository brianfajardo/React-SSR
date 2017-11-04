import App from './App'
import LandingPage from './pageContainers/LandingPage'
import UsersListPage from './pageContainers/UsersListPage'

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
    ],
  },
]

export default Routes
