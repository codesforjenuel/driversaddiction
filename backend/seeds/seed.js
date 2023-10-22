const { Video, DriverOfTheWeek, DriverSocial, TrendingPost } = require('../models')
const sequelize = require('../config/connection')

const seed = async () => {
  await sequelize.sync({ force: true })
  // Create 3 videos for DriverOfTheWeek and 3 for TrendingPost
  const driverVideos = await Video.bulkCreate([
    { title: 'Driver Video 1', url: 'https://example.com/driver1.mp4', isShort: true },
    { title: 'Driver Video 2', url: 'https://example.com/driver2.mp4', isShort: false },
    { title: 'Driver Video 3', url: 'https://example.com/driver3.mp4', isShort: true }
  ])

  const trendingVideos = await Video.bulkCreate([
    { title: 'Trending Video 1', url: 'https://example.com/trending1.mp4', isShort: false },
    { title: 'Trending Video 2', url: 'https://example.com/trending2.mp4', isShort: true },
    { title: 'Trending Video 3', url: 'https://example.com/trending3.mp4', isShort: false }
  ])

  // Create 4 DriverOfTheWeek entries
  const drivers = await DriverOfTheWeek.bulkCreate([
    {
      heroImage: 'hero1.jpg',
      profileImage: 'profile1.jpg',
      driversName: 'Driver 1',
      driverBio: 'Bio for Driver 1',
      videoId: driverVideos[0].id,
      story: 'Story for Driver 1'
    },
    {
      heroImage: 'hero2.jpg',
      profileImage: 'profile2.jpg',
      driversName: 'Driver 2',
      driverBio: 'Bio for Driver 2',
      videoId: driverVideos[1].id,
      story: 'Story for Driver 2'
    },
    {
      heroImage: 'hero3.jpg',
      profileImage: 'profile3.jpg',
      driversName: 'Driver 3',
      driverBio: 'Bio for Driver 3',
      videoId: driverVideos[2].id,
      story: 'Story for Driver 3'
    },
    {
      heroImage: 'hero4.jpg',
      profileImage: 'profile4.jpg',
      driversName: 'Driver 4',
      driverBio: 'Bio for Driver 4',
      story: 'Story for Driver 4'
    }
  ])

  // Create 4 socials for each driver
  for (const driver of drivers) {
    await DriverSocial.bulkCreate([
      { name: 'Facebook', url: 'https://facebook.com/driver' + driver.id, driverProfileId: driver.id },
      { name: 'Twitter', url: 'https://twitter.com/driver' + driver.id, driverProfileId: driver.id },
      { name: 'Instagram', url: 'https://instagram.com/driver' + driver.id, driverProfileId: driver.id },
      { name: 'LinkedIn', url: 'https://linkedin.com/driver' + driver.id, driverProfileId: driver.id }
    ])
  }

  // Create 3 TrendingPost entries with videos
  await TrendingPost.bulkCreate([
    {
      heroImage: 'trending_hero1.jpg',
      title: 'Trending Post 1',
      videoId: trendingVideos[0].id,
      story: 'Story for Trending Post 1'
    },
    {
      heroImage: 'trending_hero2.jpg',
      title: 'Trending Post 2',
      videoId: trendingVideos[1].id,
      story: 'Story for Trending Post 2'
    },
    {
      heroImage: 'trending_hero3.jpg',
      title: 'Trending Post 3',
      videoId: trendingVideos[2].id,
      story: 'Story for Trending Post 3'
    }
  ])

  console.log('Seeding completed!')
}

seed().then(() => {
  sequelize.close()
}).catch(error => {
  console.error('Error during seeding:', error)
  sequelize.close()
})
