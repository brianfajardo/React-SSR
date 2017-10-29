const passport = require('passport')
const FacebookStrategy = require('passport-facebook')

module.exports = passport.use(
  new FacebookStrategy({
    clientID: 'facebook app id goes here',
    clientSecret: 'facebook app secret goes here',
    profileFields: ['id', 'email', 'first_name', 'last_name'],
    callbackURL: '/auth/facebook/callback',
    proxy: true,
  }) /* (accessToken, refreshToken, profile, cb/done) => do something with auth'd acc (touch db)  */
)
