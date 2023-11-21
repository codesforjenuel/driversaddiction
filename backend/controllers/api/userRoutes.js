const router = require('express').Router()
const { User } = require('../../models')
const { signToken } = require('../../utils/auth')

// POST route for User creation (disabled in production)
if (process.env.NODE_ENV !== 'production') {
  router.post('/', async (req, res) => {
    try {
      const user = await User.create(req.body)
      const userWithoutPassword = user.toObject()
      delete userWithoutPassword.password // Remove password from response
      const token = signToken(user)
      res.header('authorization', `Bearer ${token}`)
      res.status(200).json(token)
    } catch (err) {
      res.status(400).json(err)
      console.log(err)
    }
  })
}

// POST route for User login
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' })
      return
    }

    const validPassword = await user.checkPassword(req.body.password)
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' })
      return
    }

    const userWithoutPassword = user.toObject()
    delete userWithoutPassword.password // Remove password from response
    const token = signToken(user)
    res.header('authorization', `Bearer ${token}`)
    res.json(token)
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
})

module.exports = router
