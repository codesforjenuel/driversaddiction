const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// DriverSocial Model
class DriverSocial extends Model {}
DriverSocial.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    socialAcc: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isUrl: true,
      },
    },
    driverProfileId: {
      type: DataTypes.INTEGER,
      references: {
        model: "DriverOfTheWeeks", // 'DriverOfTheWeek' would be the table name in the database
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "DriverSocial",
  }
);

module.exports = DriverSocial;
