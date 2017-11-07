import 'babel-polyfill'
import express from 'express'
import proxy from 'express-http-proxy'
import helmet from 'helmet'
import compression from 'compression'
import config from '../config'
import { createStore, renderer, makeComponentRequests } from './helpers'

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app
  .use(helmet())
  .use('/api', proxy(config.API_URL))
  .use(express.static('public'))
  .use(compression())

// Glob route for initial server-side request
app.get('*', async (req, res) => {
  let content
  const routerContext = {}
  const store = createStore(req)
  const componentRequests = makeComponentRequests(req, store)

  await Promise.all(componentRequests)

  // Once above Promises are resolved, Redux store (via rootReducer)
  // is updated with the new state before being rendered (renderToString).
  content = renderer(req, store, routerContext)

  // renderer will update the StaticRouter context object
  // with properties when certain components are rendered.
  if (routerContext.pageNotFound) res.status(404)
  if (routerContext.url) return res.redirect(routerContext.url)

  res.status(200).send(content)
})

app.listen(PORT, () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Server listening on Port:${PORT}`)
  }
})
