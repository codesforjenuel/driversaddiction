const router = require('express').Router()
const { TrendingPost, Video } = require('../../models')
const { withAuth } = require('../../utils/auth')

// Read routes
// GET TrendingPosts with pagination
router.get('/', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10
    const offset = parseInt(req.query.offset) || 0
    const trendingPostData = await TrendingPost.find().sort({ createdAt: -1 }).populate('video').limit(limit).skip(offset)
    res.status(200).json(trendingPostData)
  } catch (err) {
    res.status(400).json(err)
  }
})

// GET TrendingPost by ID
router.get('/:id', async (req, res) => {
  try {
    const trendingPostData = await TrendingPost.findById(req.params.id).populate('video')
    res.status(200).json(trendingPostData)
  } catch (err) {
    res.status(400).json(err)
  }
})

// POST a new TrendingPost
router.post('/', withAuth, async (req, res) => {
  try {
    const trendingPost = req.body
    if (req.body.video) {
      const videoData = await Video.create(req.body.video)
      trendingPost.videoId = videoData._id
    }
    const newTrendingPost = await TrendingPost.create(trendingPost)
    res.status(200).json(newTrendingPost)
  } catch (err) {
    res.status(400).json(err)
  }
})

// PUT (update) a TrendingPost
router.put('/:id', withAuth, async (req, res) => {
  try {
    await TrendingPost.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({ message: 'TrendingPost updated successfully' })
  } catch (err) {
    res.status(400).json(err)
  }
})

// DELETE a TrendingPost
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const result = await TrendingPost.findByIdAndDelete(req.params.id)
    res.status(200).json(result ? { message: 'TrendingPost deleted successfully' } : { message: 'TrendingPost not found' })
  } catch (err) {
    res.status(400).json(err)
  }
})

module.exports = router
