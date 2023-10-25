const router = require('express').Router()
const { TrendingPost, Video } = require('../../models')
const withAuth = require('../../utils/auth')

// TODO: Add CRUD routes for TrendingPost model
// Read routes
// This route accepts a limit and offset parameter to allow for pagination
router.get('/', async (req, res) => {
  try {
    const trendingPostData = await TrendingPost.findAll({
      order: [['createdAt', 'DESC']],
      include: [{ model: Video, as: 'video' }],
      limit: parseInt(req.query.limit) || 10,
      offset: parseInt(req.query.offset) || 0
    })
    res.status(200).json(trendingPostData)
  } catch (err) {
    res.status(400).json(err)
  }
}
)
router.get('/:id', async (req, res) => {
  try {
    const trendingPostData = await TrendingPost.findByPk(req.params.id, {
      include: [{ model: Video, as: 'video' }]
    })
    res.status(200).json(trendingPostData)
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
    const trendingPost = req.body
    if (req.body.video) {
      const videoData = await Video.create(req.body.video)
      trendingPost.videoId = videoData.id
    }
    const trendingPostData = await TrendingPost.create(trendingPost)
    res.status(200).json(trendingPostData)
  } catch (err) {
    res.status(400).json(err)
  }
}
)

router.put('/:id', withAuth, async (req, res) => {
  try {
    await TrendingPost.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.status(200).json({ message: 'TrendingPost updated successfully' })
  } catch (err) {
    res.status(400).json(err)
  }
}
)

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const trendingPostData = await TrendingPost.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(trendingPostData === 1 ? { message: 'TrendingPost deleted successfully' } : { message: 'TrendingPost not found' })
  } catch (err) {
    res.status(400).json(err)
  }
}
)

module.exports = router
