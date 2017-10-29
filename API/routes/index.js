const auth = require('./auth')
const user = require('./user')

module.exports = app => {
  // Home message
  app.get('/', (req, res) =>
    res.send('This is my API server for my Rendering server!')
  )

  // Authentication routes
  app.get('/auth/facebook', auth.facebook.oAuth)
  app.get('/auth/facebook/callback', auth.facebook.callback)

  // User routes
  app.get('/users', user.getUserList)
  app.get('/admins', user.getAdminList)
  app.get('/logout', user.logout)
}
