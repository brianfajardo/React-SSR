const passport = require('passport')
const auth = require('./auth')
const user = require('./user')
const { requireAuth } = require('../middleware')

module.exports = app => {
  // Home message
  app.get('/', (req, res) =>
    res.send('This is my API server for my Rendering server!')
  )

  // Authentication routes
  app.get(
    '/auth/facebook',
    passport.authenticate('facebook', { scope: ['email', 'public_profile'] })
  )

  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/' }),
    auth.facebook.callback
  )

  app.get('/auth/current_user', auth.getCurrentUser)

  // User routes
  app.get('/users', user.getUserList)
  app.get('/admins', requireAuth, user.getAdminList)
  app.get('/logout', user.logout)
}
