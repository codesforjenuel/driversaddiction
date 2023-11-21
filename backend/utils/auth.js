const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET
const expiration = '2h'

const withAuth = (req, res, next) => {
  // If the user is not logged in, return a 401 status code
  let token = req.body.token || req.query.token || req.headers.authorization

  if (req.headers.authorization) {
    token = token.split(' ').pop().trim()
  }

  if (!token) {
    res.status(401).json({ message: 'Unauthorized' })
    return
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      console.log(err)
      return res.status(403).json({ message: 'Forbidden' })
    }

    req.user = decoded

    next()
  })
}

const signToken = function ({ email, username, _id }) {
  const payload = { email, username, _id }
  return jwt.sign({ authenticatedPerson: payload }, secret, { expiresIn: expiration })
}

module.exports = { withAuth, signToken }
