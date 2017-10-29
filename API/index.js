const express = require('express')
const cors = require('cors')
const passport = require('passport')
const cookieSession = require('cookie-session')
const { cookieKey } = require('./config')
const router = require('./routes')
require('./database')
require('./services/passport')

const app = express()
const PORT = process.env.PORT || 4000

// Middleware
app
  .use(cors())
  .use(cookieSession({ keys: cookieKey }))
  .use(passport.initialize())
  .use(passport.session())

router(app)

app.listen(PORT, () => console.log(`API server listening on PORT:${PORT}`))
