const router = require('express').Router()
const { Video } = require('../../models')
const { withAuth } = require('../../utils/auth')

// Read routes
// GET all videos
router.get('/', async (req, res) => {
  try {
    const videoData = await Video.find()
    res.status(200).json(videoData)
  } catch (err) {
    res.status(400).json(err)
  }
})

// GET a specific video by ID
router.get('/:id', async (req, res) => {
  try {
    const videoData = await Video.findById(req.params.id)
    res.status(200).json(videoData)
  } catch (err) {
    res.status(400).json(err)
  }
})

// Create, update, and delete routes
// POST a new video
router.post('/', withAuth, async (req, res) => {
  try {
    const videoData = await Video.create(req.body)
    res.status(200).json(videoData)
  } catch (err) {
    res.status(400).json(err)
  }
})

// PUT (update) a video
router.put('/:id', withAuth, async (req, res) => {
  try {
    await Video.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json({ message: 'Video updated successfully' })
  } catch (err) {
    res.status(400).json(err)
  }
})

// DELETE a video
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const result = await Video.findByIdAndDelete(req.params.id)
    res.status(200).json(result ? { message: 'Video deleted successfully' } : { message: 'Video not found' })
  } catch (err) {
    res.status(400).json(err)
  }
})

module.exports = router
