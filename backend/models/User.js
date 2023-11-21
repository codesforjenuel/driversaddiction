const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

// Define the schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (email) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(email)
      },
      message: 'Please enter a valid email'
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  }
}, {
  timestamps: false
})

// Password hashing before saving
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10)
  }
  next()
})

// Custom method to check password
userSchema.methods.checkPassword = function (loginPw) {
  return bcrypt.compareSync(loginPw, this.password)
}

// Create the model
const User = mongoose.model('User', userSchema)

module.exports = User
