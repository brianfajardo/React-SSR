const { Schema, model } = require('mongoose')

const userSchema = new Schema({
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
const User = model('user', userSchema)

module.exports = User
