const express = require('express')
const cors = require('cors')
const router = require('./routes')

const app = express()
const PORT = process.env.PORT || 4000

// Middleware
app.use(cors())

router(app)

app.listen(PORT, () => console.log(`API server listening on PORT:${PORT}`))
