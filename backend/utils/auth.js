const withAuth = (req, res, next) => {
  // If the user is not logged in, return a 401 status code
  if (!req.session.logged_in) {
    res.status(401).json({ message: 'Unauthorized' })
  } else {
    next()
  }
}

module.exports = withAuth
