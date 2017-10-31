require('./database')
require('./services/passport')
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const passport = require('passport')
const compression = require('compression')
const cookieSession = require('cookie-session')
const { cookieKey } = require('./config')
const router = require('./routes')

const app = express()
const PORT = process.env.PORT || 4000

// Middleware
app
  .use(morgan('⚡️ :method :url :status - :response-time ms'))
  .use(helmet())
  .use(cors())
  .use(
    cookieSession({
      keys: [cookieKey],
      maxAge: 24 * 60 * 60 * 1000, // 24 hrs
    })
  )
  .use(passport.initialize())
  .use(passport.session())
  .use(compression())

router(app)

app.listen(PORT, () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`API server listening on PORT:${PORT}`)
  }
})
