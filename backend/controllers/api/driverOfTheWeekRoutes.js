const router = require('express').Router()
const { DriverOfTheWeek, Video, DriverSocial } = require('../../models')
const { withAuth } = require('../../utils/auth')

// Read routes
// GET the newest DriverOfTheWeek
router.get('/', async (req, res) => {
  try {
    const driverOfTheWeekData = await DriverOfTheWeek.findOne().sort({ createdAt: -1 }).populate('videoId').populate('socials')
    res.status(200).json(driverOfTheWeekData)
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
})
router.get('/all', async (req, res) => {
  try {
    const driverOfTheWeekData = await DriverOfTheWeek.findAll(req.params.id)
    res.status(200).json(driverOfTheWeekData)
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
})

// GET DriverOfTheWeek by ID
router.get('/:id', async (req, res) => {
  try {
    const driverOfTheWeekData = await DriverOfTheWeek.findById(req.params.id).populate('videoId').populate('socials')
    res.status(200).json(driverOfTheWeekData)
  } catch (err) {
    res.status(400).json(err)
  }
})

// POST a new DriverOfTheWeek
router.post('/', withAuth, async (req, res) => {
  try {
    const driverData = req.body
    let videoData
    if (req.body.video) {
      videoData = await Video.create(req.body.video)
      driverData.videoId = videoData._id
    }
    const driverOfTheWeekData = await DriverOfTheWeek.create(driverData)
    if (req.body.socials) {
      const socials = req.body.socials.map(social => ({ ...social, driverProfileId: driverOfTheWeekData._id }))
      await DriverSocial.create(socials)
    }
    res.status(200).json(driverOfTheWeekData)
  } catch (err) {
    res.status(400).json(err)
  }
})

// PUT (update) a DriverOfTheWeek
router.put('/:id', withAuth, async (req, res) => {
  try {
    await DriverOfTheWeek.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({ message: 'DriverOfTheWeek updated successfully' })
  } catch (err) {
    res.status(400).json(err)
  }
})

// DELETE a DriverOfTheWeek
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const result = await DriverOfTheWeek.findByIdAndDelete(req.params.id)
    res.status(200).json(result ? { message: 'DriverOfTheWeek deleted successfully' } : { message: 'DriverOfTheWeek not found' })
  } catch (err) {
    res.status(400).json(err)
  }
})

module.exports = router
