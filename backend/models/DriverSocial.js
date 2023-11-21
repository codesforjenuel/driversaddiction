const mongoose = require('mongoose')

// Define the schema
const DriverSocialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  socialAcc: {
    type: Boolean,
    required: true
  },
  url: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        // Simple regex for URL validation
        return /^(ftp|http|https):\/\/[^ "]+$/.test(v)
      },
      message: props => `${props.value} is not a valid URL!`
    }
  }
})

// Create the model
const DriverSocial = mongoose.model('DriverSocial', DriverSocialSchema)

module.exports = DriverSocial
