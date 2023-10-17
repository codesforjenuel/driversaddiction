const router = require('express').Router();
const withAuth = require('../../utils/auth');

// router.get('/', withAuth, async (req, res) => {
router.get('/', async (req, res) => {
  try {
    // TODO: Add logic to add post to database
    // TODO: Add logic to send the new post back to the client
    res.status(200).json({ message: 'New post created!' });
  } catch (err) {
    res.status(400).json(err);
  }
});

// TODO: Create more CRUD routes for posts using withAuth middleware

module.exports = router;
