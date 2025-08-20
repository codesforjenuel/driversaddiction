const express = require('express')
const path = require('path')
const routes = require('./controllers')
const cors = require('cors')
const db = require('./config/connection')

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)

// Always serve frontend
app.use(express.static(path.join(__dirname, '../frontend/dist')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'))
})

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`)
  })
})
