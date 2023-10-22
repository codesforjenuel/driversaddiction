const User = require('./User')
const Post = require('./Post')
const DriverOfTheWeek = require('./driverOfTheWeek')
const DriverSocial = require('./DriverSocial')
const Video = require('./Video')
const TrendingPost = require('./TrendingPost')

// TODO: Create table associations
DriverOfTheWeek.hasMany(DriverSocial, { as: 'socials', foreignKey: 'driverProfileId' })
DriverSocial.belongsTo(DriverOfTheWeek, { foreignKey: 'driverProfileId' })
DriverOfTheWeek.belongsTo(Video, { foreignKey: 'videoId', as: 'video' })
Video.hasOne(DriverOfTheWeek, { foreignKey: 'videoId' })
TrendingPost.belongsTo(Video, { foreignKey: 'videoId', as: 'video' })
Video.hasOne(TrendingPost, { foreignKey: 'videoId' })

module.exports = { DriverOfTheWeek, DriverSocial, Video, TrendingPost, User, Post }
