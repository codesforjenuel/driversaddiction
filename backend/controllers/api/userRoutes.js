const router = require('express').Router()
const { User } = require('../../models')
const { signToken } = require('../../utils/auth')

// This route is disabled in production
if (process.env.NODE_ENV !== 'production') {
  router.post('/', async (req, res) => {
    try {
      const userData = await User.create(req.body)
      // Remove password from response message
      delete userData.dataValues.password
      const token = signToken(userData)
      res.header('authorization', `Bearer ${token}`)
      res.status(200).json(token)
    } catch (err) {
      res.status(400).json(err)
    }
  })
}

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } })

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' })
      return
    }

    const validPassword = await userData.checkPassword(req.body.password)

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' })
      return
    }
    // Remove password from response message
    delete userData.dataValues.password
    const token = signToken(userData)
    res.header('authorization', `Bearer ${token}`)
    res.json(token)
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
})
module.exports = router
