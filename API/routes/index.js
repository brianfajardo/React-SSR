const userRoutes = require('./user')

module.exports = app => {
  // Home message
  app.get('/', (req, res) =>
    res.send('This is my API server for my Rendering server!')
  )

  // User routes
  app.get('/users', userRoutes.getUserList)
  app.get('/users/admin', userRoutes.getAdminList)
}
