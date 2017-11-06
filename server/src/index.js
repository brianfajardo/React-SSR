import 'babel-polyfill'
import express from 'express'
import proxy from 'express-http-proxy'
import config from '../config'
import { createStore, renderer, makeComponentRequests } from './helpers'

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use('/api', proxy(config.API_URL))
app.use(express.static('public'))

// Glob route for initial server-side request
app.get('*', async (req, res) => {
  const staticRouterContext = {}
  const store = createStore(req)
  const componentRequests = makeComponentRequests(req, store)
  const content = renderer(req, store, staticRouterContext)

  // If the router context contains the pageNotFound property, this means
  // that the 404 Page was rendered (serverside). Send 404 as response.
  if (staticRouterContext.pageNotFound) res.status(404)

  await Promise.all(componentRequests)
  // Once promises are resolved, store is updated with the
  // fetched data and UI is updated to reflect the new state.
  res.status(200).send(content)
})

app.listen(PORT, () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Server listening on Port:${PORT}`)
  }
})
