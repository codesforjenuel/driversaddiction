const router = require('express').Router()
const userRoutes = require('./userRoutes')
const videoRoutes = require('./videoRoutes')
const driverOfTheWeekRoutes = require('./driverOfTheWeekRoutes')
const trendingPostRoutes = require('./trendingPostRoutes')

router.use('/users', userRoutes)
router.use('/videos', videoRoutes)
router.use('/driverOfTheWeek', driverOfTheWeekRoutes)
router.use('/trendingPosts', trendingPostRoutes)

module.exports = router
