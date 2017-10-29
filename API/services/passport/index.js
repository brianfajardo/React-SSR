const passport = require('passport')
const mongoose = require('mongoose')
const { facebookStrategy } = require('./strategies')

// Reference to the user document collection in database.
const User = mongoose.model('user')

// serializeUser determines what data of the user object should
// be stored in the session. Result of serializeUser is attached
// to the session as req.session.passport.user.
passport.serializeUser((user, done) => done(null, user.id))

// "id" argument corresponds to the key of the user object that was
// given to the done function in serializeUser. "id" is then matched
// to find the user in our database.
passport.deserializeUser((id, done) => {
  User
    .findById(id)
    .then(user => done(null, user))
})

passport.use(facebookStrategy)
