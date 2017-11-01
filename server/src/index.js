import 'babel-polyfill'
import express from 'express'
import { matchRoutes } from 'react-router-config'
import Routes from './client/Routes'
import { createStore, renderer } from './helpers'

const app = express()
const PORT = process.env.PORT || 3000

// Expose the public directory containing the
// Webpack client bundle to rehydrate React app.
app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = createStore()

  // matchRoutes takes in a routes config and the path the user is trying to hit
  // and returns an array of matched paths (objects) that contains the exact
  // React component and its loadData function needed to fetch data.
  matchRoutes(Routes, req.path).map(({ route }) => {
    if (route.loadData) return route.loadData()
  })

  res.send(renderer(req, store)).status(200)
})

app.listen(PORT, () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Server listening on Port:${PORT}`)
  }
})
