const router = require('express').Router()
const { Video } = require('../../models')
const withAuth = require('../../utils/auth')

// Read routes
router.get('/', async (req, res) => {
  try {
    const videoData = await Video.findAll()
    res.status(200).json(videoData)
  } catch (err) {
    res.status(400).json(err)
  }
}
)
router.get('/:id', async (req, res) => {
  try {
    const videoData = await Video.findByPk(req.params.id)
    res.status(200).json(videoData)
  } catch (err) {
    res.status(400).json(err)
  }
}
)

// Create, update, and delete routes
// These routes are protected by the `withAuth()` middleware function, which validates that the user is logged in
// When the public is able to create users, it will be important to update this middleware to be role-based
router.post('/', withAuth, async (req, res) => {
  try {
    const videoData = await Video.create(req.body)
    res.status(200).json(videoData)
  } catch (err) {
    res.status(400).json(err)
  }
}
)

router.put('/:id', withAuth, async (req, res) => {
  try {
    await Video.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.status(200).json({ message: 'Video updated successfully' })
  } catch (err) {
    res.status(400).json(err)
  }
}
)

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const videoData = await Video.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(videoData === 1 ? { message: 'Video deleted successfully' } : { message: 'Video not found' })
  } catch (err) {
    res.status(400).json(err)
  }
}
)

module.exports = router
