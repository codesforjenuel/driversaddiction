const { Video, DriverOfTheWeek, DriverSocial, TrendingPost } = require('../models')
const mongoose = require('mongoose')
const dbUrl = 'mongodb://127.0.0.1:27017/driversaddictiondb'

const seed = async () => {
  await mongoose.connect(dbUrl)

  // Delete all collections
  await Video.deleteMany()
  await DriverOfTheWeek.deleteMany()
  await DriverSocial.deleteMany()
  await TrendingPost.deleteMany()

  // Create videos for DriverOfTheWeek and TrendingPost
  const driverVideos = await Video.create([
    { title: 'Driver Video 1', url: 'https://example.com/driver1.mp4', isShort: true },
    { title: 'Driver Video 2', url: 'https://example.com/driver2.mp4', isShort: false },
    { title: 'Driver Video 3', url: 'https://example.com/driver3.mp4', isShort: true }
  ])

  const trendingVideos = await Video.create([
    { title: 'Trending Video 1', url: 'https://example.com/trending1.mp4', isShort: false },
    { title: 'Trending Video 2', url: 'https://example.com/trending2.mp4', isShort: true },
    { title: 'Trending Video 3', url: 'https://example.com/trending3.mp4', isShort: false }
  ])

  // Create DriverOfTheWeek entries
  const drivers = []
  for (let i = 1; i <= 3; i++) {
    const socials = await DriverSocial.create([
      { name: 'Facebook', socialAcc: true, url: 'https://facebook.com/driver' + i }
    ])
    drivers.push(
      await DriverOfTheWeek.create({
        heroImage: `hero${i}.jpg`,
        profileImage: `profile${i}.jpg`,
        driversName: `Driver ${i}`,
        driverBio: `Bio for Driver ${i}`,
        videoId: driverVideos[i - 1]._id,
        story: `Story for Driver ${i}`,
        socials: socials.map(s => s._id)
      })
    )
  }

  // Create TrendingPost entries with videos
  for (let i = 1; i <= 3; i++) {
    await TrendingPost.create({
      heroImage: `trending_hero${i}.jpg`,
      title: `Trending Post ${i}`,
      videoId: trendingVideos[i - 1]._id,
      story: `Story for Trending Post ${i}`
    })
  }

  console.log('Seeding completed!')
}

seed().then(() => {
  mongoose.disconnect()
}).catch(error => {
  console.error('Error during seeding:', error)
  mongoose.disconnect()
})
