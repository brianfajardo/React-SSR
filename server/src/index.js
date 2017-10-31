import express from 'express'
import createStore from './helpers/createStore'
import renderer from './helpers/renderer'

const app = express()
const PORT = process.env.PORT || 3000

// Expose the public directory containing the
// Webpack client bundle to rehydrate React app.
app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = createStore()
  // Do some logic to initialize and load data into the store
  res.send(renderer(req, store)).status(200)
})

app.listen(PORT, () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Server listening on Port:${PORT}`)
  }
})
