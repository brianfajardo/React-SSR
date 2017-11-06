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
  let content
  const staticRouterContext = {}
  const store = createStore(req)
  const componentRequests = makeComponentRequests(req, store)

  await Promise.all(componentRequests)

  // Once above Promises are resolved, Redux store (via rootReducer)
  // is updated with the new state before being rendered (renderToString).
  content = renderer(req, store, staticRouterContext)

  // renderer will update the StaticRouter context object
  // with properties when certain components are rendered.
  if (staticRouterContext.pageNotFound) res.status(404)

  res.status(200).send(content)
})

app.listen(PORT, () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Server listening on Port:${PORT}`)
  }
})
