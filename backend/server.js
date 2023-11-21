const express = require('express')
const path = require('path')
const routes = require('./controllers')
const cors = require('cors')
const sequelize = require('./config/connection')

const app = express()
const PORT = process.env.PORT || 3001

// Middleware for handling CORS POLICY
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'))
  })
}

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'))
})
