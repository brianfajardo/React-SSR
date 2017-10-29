const mongoose = require('mongoose')
require('./models')

mongoose.Promise = global.Promise
mongoose.connect = ('setup mongoURI')
