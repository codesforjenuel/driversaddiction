const router = require('express').Router()
const { DriverOfTheWeek, Video, DriverSocial } = require('../../models')
const withAuth = require('../../utils/auth')

// Read routes
// This route finds the newest DriverOfTheWeek.
// change the findOne to a findAll when you want to start displaying the last 30 or so below the current driver of the week
// Then use the first entry in the array for the current driver of the week
router.get('/', async (req, res) => {
  try {
    const driverOfTheWeekData = await DriverOfTheWeek.findOne({
      order: [['createdAt', 'DESC']],
      include: [{ model: Video, as: 'video' },
        {
          model: DriverSocial,
          as: 'socials'
        }]
    })
    res.status(200).json(driverOfTheWeekData)
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
}
)
router.get('/:id', async (req, res) => {
  try {
    const driverOfTheWeekData = await DriverOfTheWeek.findByPk(req.params.id, {
      include: [{ model: Video, as: 'video' },
        {
          model: DriverSocial,
          as: 'socials'
        }]
    })
    res.status(200).json(driverOfTheWeekData)
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
    const driverData = req.body
    if (req.body.video) {
      const videoData = await Video.create(req.body.video)
      driverData.videoId = videoData.id
    }
    const driverOfTheWeekData = await DriverOfTheWeek.create(driverData)
    if (req.body.socials) {
      const socials = req.body.socials.map(social => ({ ...social, driverProfileId: driverOfTheWeekData.id }))
      await DriverSocial.bulkCreate(socials)
    }
    res.status(200).json(driverOfTheWeekData)
  } catch (err) {
    res.status(400).json(err)
  }
}
)

router.put('/:id', withAuth, async (req, res) => {
  try {
    await DriverOfTheWeek.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.status(200).json({ message: 'DriverOfTheWeek updated successfully' })
  } catch (err) {
    res.status(400).json(err)
  }
}
)

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const driverOfTheWeekData = await DriverOfTheWeek.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(driverOfTheWeekData === 1 ? { message: 'DriverOfTheWeek deleted successfully' } : { message: 'DriverOfTheWeek not found' })
  } catch (err) {
    res.status(400).json(err)
  }
}
)

module.exports = router
