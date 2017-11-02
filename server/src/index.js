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
  const store = createStore(req)
  const componentRequests = makeComponentRequests(req, store)

  await Promise.all(componentRequests)
  // Once promises are resolved, store is updated with the
  // fetched data and UI is updated to reflect the new state.
  res.send(renderer(req, store)).status(200)
})

app.listen(PORT, () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Server listening on Port:${PORT}`)
  }
})
