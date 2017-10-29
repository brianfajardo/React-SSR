const { users, admins } = require('../../seed')

module.exports = {

  getUserList(req, res) {
    res.send(users).status(200)
  },

  getAdminList(req, res) {
    res.send(admins).status(200)
  },

  logout(req, res) {
    req.logout()
    res.redirect('/')
  },
}
