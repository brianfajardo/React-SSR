const productionKeys = require('./production')
const developmentKeys = require('./development')

if (process.env.NODE_ENV === 'production') {
  module.exports = productionKeys
} else {
  module.exports = developmentKeys
}

