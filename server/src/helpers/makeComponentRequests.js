import { matchRoutes } from 'react-router-config'
import Routes from '../client/Routes'

// This function will always return an array of resolved Promises!

export default (req, store) =>
  // matchRoutes takes in a routes config and the path the user is trying to hit
  // and returns an array of matched paths (objects) that contains the exact
  // React component and its loadData function needed to fetch data.
  matchRoutes(Routes, req.path)
    .map(({ route }) => (route.loadData ? route.loadData(store) : null))
    // Normally, in Promise.all(), in the event that one Promise is rejected,
    // other Promises in the chain are not given the time to finish resolving and
    // the entire Promise.all() is ended early and passed to the .catch() function.
    // This will result in missing components/state in the initial server render!

    // Creating an inner Promise to force resolve of rejected Promises to allow
    // Promise.all() to continue to finish resolving other Promises in the chain.
    .map(loadDataPromise => {
      if (loadDataPromise) {
        return new Promise(resolve => loadDataPromise.then(resolve).catch(resolve))
      }
    })
