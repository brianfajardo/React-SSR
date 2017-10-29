const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  facebookId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,
  },
})

// Reference to User document collection.
const User = mongoose.model('user', userSchema)

module.exports = User
