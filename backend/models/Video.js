const mongoose = require('mongoose')

// Define the schema
const VideoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  url: {
    type: String,
    required: [true, 'URL is required'],
    validate: {
      validator: function (v) {
        // Simple regex for URL validation
        return /^(ftp|http|https):\/\/[^ "]+$/.test(v)
      },
      message: props => `${props.value} is not a valid URL!`
    }
  },
  isShort: {
    type: Boolean,
    default: false
  }
})

// Create the model
const Video = mongoose.model('Video', VideoSchema)

module.exports = Video
