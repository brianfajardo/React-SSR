const FacebookStrategy = require('passport-facebook')
const User = require('../../../database/models/User')

module.exports = new FacebookStrategy(
  {
    clientID: 'facebook app id goes here',
    clientSecret: 'facebook app secret goes here',
    profileFields: ['id', 'email', 'first_name', 'last_name'],
    callbackURL: '/auth/facebook/callback',
    proxy: true,
  },
  (accessToken, refreshToken, profile, done) => {
    // Do something after Facebook oAuth...
    // If user exists, just return user.
    // Else, create a new user in the data base.
    // return done()
  }
)
