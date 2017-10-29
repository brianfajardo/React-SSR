const passport = require('passport')
const FacebookStrategy = require('passport-facebook')
const mongoose = require('mongoose')
const {
  facebookClientID,
  facebookClientSecret,
  callbackURL,
} = require('../../../config')

// Reference to users document collection in database.
const User = mongoose.model('user')

passport.use(
  new FacebookStrategy(
    {
      clientID: facebookClientID,
      clientSecret: facebookClientSecret,
      profileFields: ['id', 'email', 'first_name', 'last_name'],
      callbackURL,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ facebookId: profile.id })
      if (existingUser) return done(null, existingUser)

      const userDetails = {
        facebookId: profile.id,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile.emails[0].value,
      }
      const newUser = await new User(userDetails).save()

      return done(null, newUser)
    }
  )
)
