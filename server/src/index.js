const express = require('express')
const React = require('react')
const renderToString = require('react-dom/server').renderToString

const Landing = require('./client/components/Landing').default

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  const content = renderToString(<Landing />)
  res.send(content)
})

app.listen(PORT, () => console.log(`Server listening on Port:${PORT}`))
