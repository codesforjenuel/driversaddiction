const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

// Video Model
class Video extends Model {}
Video.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isUrl: true
    }
  },
  isShort: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  sequelize,
  modelName: 'Video'
})

module.exports = Video
