import 'babel-polyfill'
import express from 'express'
import { matchRoutes } from 'react-router-config'
import Routes from './client/Routes'
import createStore from './helpers/createStore'
import renderer from './helpers/renderer'

const app = express()
const PORT = process.env.PORT || 3000

// Expose the public directory containing the
// Webpack client bundle to rehydrate React app.
app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = createStore()

  // matchRoutes takes in a routes config and the path the user is trying to hit
  // and returns an array of matched paths (objects) that contains the exact
  // React component needed to load for that path.
  console.log(matchRoutes(Routes, req.path))

  res.send(renderer(req, store)).status(200)
})

app.listen(PORT, () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Server listening on Port:${PORT}`)
  }
})
