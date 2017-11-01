import 'babel-polyfill'
import express from 'express'
import { createStore, renderer, makeComponentRequests } from './helpers'

const app = express()
const PORT = process.env.PORT || 3000

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
