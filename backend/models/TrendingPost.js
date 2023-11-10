const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// TrendingPost Model
class TrendingPost extends Model {}
TrendingPost.init(
  {
    heroImage: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    story: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    videoId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Videos", // 'Videos' is the table name for the Video model
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "TrendingPost",
  }
);

module.exports = TrendingPost;
