const passport = require('passport')

module.exports = {

  oAuth() {
    passport.authenticate('facebook', { scope: ['email', 'public_profile'] })
  },

  callback() {
    passport.authenticate('facebook', (req, res) => {
      // Do something after successful Facebook oAuth.
      res.send('Successful Facebook oAuth!')
      // res.redirect('to somewhere')
    })
  },
}
