const facebook = require('./facebook')

module.exports = {
  facebook,

  getCurrentUser(req, res) {
    res.send(req.user).status(200)
  },
}
