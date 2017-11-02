import 'babel-polyfill'
import express from 'express'
import proxy from 'express-http-proxy'
import { BASE_API_URL } from '../config'
import { createStore, renderer, makeComponentRequests } from './helpers'

const app = express()
const PORT = process.env.PORT || 3000

// Because cookies are restricted to domain name basis,
// authenticated request for resources to this server (rendering),
// must be proxied to the API server and carry the cookie.
app.use('/api', proxy(BASE_API_URL))

// Expose the public directory containing the
// Webpack client bundle to rehydrate React app.
app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = createStore()
  const componentRequests = makeComponentRequests(req, store)

  // Once promises are resolved, store is updated with the
  // fetched data and UI is updated to reflect the new state.
  Promise.all(componentRequests).then(() => {
    res.send(renderer(req, store)).status(200)
  })
})

app.listen(PORT, () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Server listening on Port:${PORT}`)
  }
})
