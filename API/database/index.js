const mongoose = require('mongoose')
const { mongoURI } = require('../config')
require('./models/User')

// Replace Mongoose's Bluebird Promise with ES6 Promises
mongoose.Promise = global.Promise

// Connect to mLab service.
mongoose.connect(mongoURI)
