const facebook = require('./facebook')

module.exports = {
  facebook,

  getCurrentUser(req, res) {
    if (!req.user) return res.send({ error: 'Please login.' }).status(401)
    res.send(req.user).status(200)
  },
}
