const mongoose = require('mongoose')

// Define the schema
const TrendingPostSchema = new mongoose.Schema({
  heroImage: {
    type: String,
    required: [true, 'Hero image is required']
  },
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  story: {
    type: String,
    required: [true, 'Story is required']
  },
  videoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Video'
  },
  createdAt: {
    type: Date,
    default: Date.now,
    index: true
  }
})

// Create the model
const TrendingPost = mongoose.model('TrendingPost', TrendingPostSchema)

module.exports = TrendingPost
