import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

// Components
import Landing from './client/components/Landing'

const app = express()
const PORT = process.env.PORT || 3000

// Expose the public directory containing the Webpack
// client bundle as a static folder to incoming HTTP requests.
app.use(express.static('public'))

app.get('/', (req, res) => {
  const content = renderToString(<Landing />)
  const html = `
  <html>
    <head></head>
    <body>
      <div id="root">${content}</div>
      <script src="bundle.js"></script>
    </body>
  </html>
  `
  res.send(html).status(200)
})

app.listen(PORT, () => console.log(`Server listening on Port:${PORT}`))
