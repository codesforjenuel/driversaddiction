const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

// DriverProfile Model
class DriverOfTheWeek extends Model {}
DriverOfTheWeek.init({
  heroImage: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  profileImage: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  driversName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  driverBio: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  story: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  videoId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Videos', // 'Videos' is the table name for the Video model
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'DriverOfTheWeek'
})

module.exports = DriverOfTheWeek
