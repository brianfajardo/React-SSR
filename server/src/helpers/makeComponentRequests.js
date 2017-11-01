import { matchRoutes } from 'react-router-config'
import Routes from '../client/Routes'

// matchRoutes takes in a routes config and the path the user is trying to hit
// and returns an array of matched paths (objects) that contains the exact
// React component and its loadData function needed to fetch data.
// Will return an array of pending network requests (promises).

export default (req, store) =>
  matchRoutes(Routes, req.path).map(({ route }) => {
    if (route.loadData) return route.loadData(store)
  })
