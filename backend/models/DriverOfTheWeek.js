const mongoose = require('mongoose')

// Define the schema
const DriverOfTheWeekSchema = new mongoose.Schema({
  heroImage: {
    type: String,
    required: true
  },
  profileImage: {
    type: String,
    required: true
  },
  driversName: {
    type: String,
    required: true
  },
  driverBio: {
    type: String,
    required: true
  },
  story: {
    type: String,
    required: true
  },
  videoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Video'
  },
  socials: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DriverSocial'
  }],
  createdAt: {
    type: Date,
    default: Date.now,
    index: true
  }
})

// Create the model
const DriverOfTheWeek = mongoose.model('DriverOfTheWeek', DriverOfTheWeekSchema)

module.exports = DriverOfTheWeek
